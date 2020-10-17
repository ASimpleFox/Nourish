CREATE TABLE Users ( -- Stores the user information for each individual user
  UserID int PRIMARY KEY
  Username varchar(99)
  Password varchar(99)
  Email varchar(99)
);

CREATE TABLE Nutrition ( -- Stores all the information on record about individual foods
  NID int PRIMARY KEY
  NameOfFood varchar(100)
  Calories int
  Saturated Fat int
  Trans Fat int
  Cholestrol int
  Sodium int
  Potassium int -- Percentage
  Dietary Fiber int
  Sugars int -- Grams
  Protein int -- Grams
  Vitamin A int -- Percentage
  Vitamin C int -- Percentage
  Calcium int -- Percentage
  Iron int -- Percentage
);

CREATE TABLE UserConsumption ( -- Stores consumption of each user
  UserID int REFERENCES Users
  FoodID int REFERENCES Nutrition
  CalculateAmount float
)

User A, User B, User C IN TABLE Users
In Nutrition Table, Apple, Lemon, Peach, Strawberry
Store User A had Apple, Lemon, User B had Peach, User C had Strawberry