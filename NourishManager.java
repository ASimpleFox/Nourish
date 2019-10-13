package projectNourish;

import java.util.*;

public class NourishManager implements NourishInterface{
	private HashMap<String, Integer> requireMap = new LinkedHashMap<>();
	private HashMap<String, Integer> currentMap = new LinkedHashMap<>();
	
	public NourishManager() {
		requireMap.put("Calories", 2000);			// Daily calorie value 2000
		requireMap.put("Saturated Fat", 100);		// Percentage base
		requireMap.put("Trans Fat", 100);			// Percentage base
		requireMap.put("Cholestrol", 30);			// Gram base
		requireMap.put("Sodium", 100);				// Percentage base
		requireMap.put("Potassium", 100);			// Percentage base
		requireMap.put("Total Carbohydrates", 100);	// Percentage base
		requireMap.put("Dietary Fiber", 100);		// Percentage base
		requireMap.put("Sugars", 50);				// Gram base
		requireMap.put("Protein", 56);				// Gram base
		requireMap.put("Vitamin A", 100);			// Percentage base
		requireMap.put("Vitamin C", 100);			// Percentage base
		requireMap.put("Calcium", 100);				// Percentage base
		requireMap.put("Iron", 100);				// Percentage base
		
		for(String key : requireMap.keySet()) {
			currentMap.put(key, 0);
		}
			
	}
	
	public void add(String nutrition, int amount) {
		nutrition.toLowerCase();
		if(currentMap.containsKey(nutrition)) {
			currentMap.replace(nutrition, currentMap.get(nutrition) + amount);
			System.out.println("Added " + amount + " to " + nutrition + "!");
		} else {
			System.out.println("That nutrition doesnt exist! Please check your spelling!");
		}
	}

	public void subtract(String nutrition, int amount) {
		nutrition.toLowerCase();
		if(currentMap.containsKey(nutrition)) {
			if(currentMap.get(nutrition) - amount < 0) {
				System.out.println("Your old amount is " + currentMap.get(nutrition) + ", but you tried to subtract " + amount + ".");
				System.out.println("Setting new amount to 0!");
				currentMap.replace(nutrition, 0);
			} else {
				currentMap.replace(nutrition, currentMap.get(nutrition) - amount);
				System.out.println("Subtracted " + amount + " from " + nutrition + "!");
				System.out.println("The result is " + currentMap.get(nutrition));
			}
		} else {
			System.out.println("That nutrition doesnt exist! Please check your spelling!");
		}
	}

	public void printCurrentStatus() {
		for(String key: currentMap.keySet()) {
			printCurrentStatus(key);
		}
	}

	public void printCurrentStatus(String nutrition) {
		nutrition.toLowerCase();
		if(currentMap.containsKey(nutrition)) {
			System.out.println("Your current intake for " + nutrition + ": " + currentMap.get(nutrition));
			System.out.println("Your recommended daily intake for " + nutrition + ": " + requireMap.get(nutrition));
			if(currentMap.get(nutrition) == requireMap.get(nutrition)) {
				System.out.println("You have gotten just enough intake!");
			} else if (currentMap.get(nutrition) < requireMap.get(nutrition)) {
				System.out.println("You haven't gotten enough intake!");
				System.out.println("You need " + (requireMap.get(nutrition) - currentMap.get(nutrition)) + " to reach daily recommended!");
			} else {
				System.out.println("You had too much intake!");
				System.out.println("You had " + (currentMap.get(nutrition) - requireMap.get(nutrition)) + "over the daily recommended!");
			}
			System.out.println();
		} else {
			System.out.println("That nutrition doesnt exist! Please check your spelling!");
		}
	}
}
