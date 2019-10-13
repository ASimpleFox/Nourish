package projectNourish;

public interface NourishInterface {
	public void add(String nutrition, int amount);		// Adds given amount to specific nutrient
	public void subtract(String nutrition, int amount);	// Subtracts given amount to specific nutrient
	public void printCurrentStatus();	// Prints out all current values, and compares to needed requirements
	public void printCurrentStatus(String nutrition);	// Prints out specific nutrition value and compares
}
