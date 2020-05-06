import json
countries_data = []
max_total = 0
min_total = 1000000
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

with open("dataset.csv", "r", encoding='utf-8-sig') as fp:
    lines = fp.readlines()
    headers = lines[0].split(",")
    for i in range(1, len(lines)):
        data_list = lines[i].split(",")
        data_dict = {}
        data_dict[headers[0].strip()] = data_list[0]
        total = 0
        data_dict["cases_by_date"] = []
        prev = 0
        for j in range(1, len(data_list)):
            ind_date = {}
            ind_date['date'] = headers[j].strip()

            day = headers[j].strip()[-2:]
            month = int(headers[j].strip().replace(day, ""))-1
            month_string = months[month]
            ind_date['date_string'] = month_string+"-"+day

            ind_date['num_cases'] = int(data_list[j])

            if prev != 0:
                ind_date['change'] = ((int(data_list[j])-prev)/prev)*100
            else:
                ind_date['change'] = 0

            prev = int(data_list[j])
            data_dict["cases_by_date"].append(ind_date)
            total = int(data_list[j])
        data_dict['total'] = total
        max_total = max(max_total, total)
        min_total = min(min_total, total)
        data_dict['ISO'] = ''
        data_dict['population'] = 0
        countries_data.append(data_dict)

print("Max total is:", max_total, "Min total is:", min_total)

with open("iso-codes.csv", "r") as fp:
    for line in fp:
        data = line.split(",")
        name = data[0]
        for cd in countries_data:
            if cd['CNTRYNAME'] == name:
                cd['ISO'] = data[2]

with open("population-figures-by-country-csv_csv.csv", "r") as fp:
    for line in fp:
        data = line.split(",")
        name = data[1].replace('"', '')
        for cd in countries_data:
            if cd['CNTRYNAME'] == name:
                cd['population'] = float(data[2].replace('"', ''))

with open("dataset-json.json", "w") as fp:
    json.dump(countries_data, fp)
    