package projectNourish;

import java.util.*;

public class NourishMain {
	public static void main(String[] args) throws InterruptedException {
		NourishManager manager = new NourishManager();
		Scanner scanner = new Scanner(System.in);
		String response;
		int amount;
		System.out.println("Welcome to Nourish Manager!");
		while(true) {
			System.out.println();
			System.out.println("If you would like to add an amount to nutrient, please type 'add'");
			System.out.println("If you would like to subtract an amount to nutrient, please type 'subtract'");
			System.out.println("If you would like to print out current status, please type 'status'");
			System.out.println("If you would like to quit, please type quit");
			response = scanner.next();
			if(response.equalsIgnoreCase("quit")) {
				manager.wait(Integer.MAX_VALUE);
			} else if(response.equalsIgnoreCase("add")) {
				System.out.println("What nutrient would you like to add to?: ");
				response = scanner.next();
				System.out.println("How much would you like to add?");
				try {
					amount = Math.abs(scanner.nextInt());
					manager.add(response, amount);
				} catch (InputMismatchException e) {
					System.out.println("Please input a valid number!");
				}
			} else if (response.equalsIgnoreCase("subtract")) {
				System.out.println("What nutrient would you like to subtract from?: ");
				response = scanner.next();
				System.out.println("Hou much would you like to remove?");
				try {
					amount = Math.abs(scanner.nextInt());
					manager.subtract(response, amount);
				} catch (InputMismatchException e) {
					System.out.println("Please input a valid number!");
				}
			} else if (response.equalsIgnoreCase("status")) {
				System.out.println("If you want to print status of one nutrient, please type the name");
				System.out.println("If you want to print all the status, please type 'all'");
				response = scanner.next();
				if(response.equalsIgnoreCase("all")) {
					manager.printCurrentStatus();
				} else {
					manager.printCurrentStatus(response);
				}
			} else if (!response.equalsIgnoreCase("quit")){
				System.out.println("Please type in a valid command!");
			}
		}
	}
}
