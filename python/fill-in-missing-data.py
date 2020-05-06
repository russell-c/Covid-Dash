import json

with open("dataset-json-old.json", "r") as fp:
    data_old_raw = fp.read()

with open("dataset-json.json", "r") as fp:
    data_new_raw = fp.read()

data_old = json.loads(data_old_raw)
data_new = json.loads(data_new_raw)

for dn in data_new:
    if dn["ISO"] == "":
        for do in data_old:
            if do["CNTRYNAME"] == dn["CNTRYNAME"]:
                dn["ISO"] = do["ISO"]

with open("dataset-json.json", "w") as fp:
    json.dump(data_new, fp)