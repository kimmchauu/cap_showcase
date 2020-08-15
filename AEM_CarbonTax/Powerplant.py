import pandas as pd
import matplotlib as mp
from pathlib import Path

path = str(
    Path(
        "/Data/PowerPlants_Global/global_power_plant_database.csv"
    )
)
df = pd.read_csv(path)
# print(df.head())
Ausdf = df.loc[df["country"] == "AUS"]
# print(Ausdf.head())
plant_type = Ausdf["primary_fuel"].value_counts()
print(plant_type)
