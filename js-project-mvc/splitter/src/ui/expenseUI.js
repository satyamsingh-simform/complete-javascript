import { DOMHelpers } from "./domHelpers";
import { showSuccessToast, showErrorToast } from "../utils/toastUtil";

export class ExpenseUI {
    constructor(userService, expenseService) {
        this.userService = userService;
        this.expenseService = expenseService;
        this.storageService = storageService;
        this.initializeElements();
        this.bindEvents();
        this.initializeSelectBox();
    }

    initializeElements() {
        this.elements = {
            addUserForm: DOMHelpers.getElementById("addUserForm"),
            userInput: DOMHelpers.getElementById("userInput"),
            addExpenseForm: DOMHelpers.getElementById("addExpenseForm"),
            expenseUserInput: DOMHelpers.getElementById("expenseUserInput"),
            expenseAmountInput: DOMHelpers.getElementById("expenseAmountInput"),
            expenseReasonInput: DOMHelpers.getElementById("expenseReasonInput"),
            simplifyBtn: DOMHelpers.getElementById("simplifyBtn"),
            resultArea: DOMHelpers.getElementById("resultArea"),
            paymentList: DOMHelpers.getElementById("payment-list"),
        };
    }

    initializeSelectBox() {
        // Add default option to select box
        const defaultOption = DOMHelpers.createOption("Select User", "");
        this.elements.expenseUserInput.add(defaultOption);
    }

    bindEvents() {
        this.elements.addUserForm.addEventListener("submit", (e) =>
            this.handleAddUser(e)
        );
        this.elements.addExpenseForm.addEventListener("submit", (e) =>
            this.handleAddExpense(e)
        );
        this.elements.simplifyBtn.addEventListener("click", () =>
            this.handleSimplify()
        );
    }

    async handleAddUser(e) {
        e.preventDefault();

        try {
            const name = this.elements.userInput.value.trim();

            if (!name) {
                throw new Error("User name is mandatory");
            }

            const user = this.userService.addUser(name);
            this.addUserToSelect(user.name);
            this.elements.addUserForm.reset();

            showSuccessToast(`User ${user.name} added successfully`);
            console.log(`User ${user.name} added`);
        } catch (error) {
            showErrorToast(error.message);
            console.error("Error adding user:", error);
        }
    }

    async handleAddExpense(e) {
        e.preventDefault();

        try {
            const paidBy = this.elements.expenseUserInput.value.trim();
            const amount = this.elements.expenseAmountInput.valueAsNumber;
            const description = this.elements.expenseReasonInput.value.trim();

            if (!paidBy) {
                throw new Error("Please select a user");
            }

            if (!amount || amount <= 0) {
                throw new Error("Please enter an amount greater than zero");
            }

            const expense = this.expenseService.addExpense(
                paidBy,
                amount,
                description
            );
            this.renderExpense(expense);

            // Reset form
            this.elements.expenseAmountInput.value = "";
            this.elements.expenseReasonInput.value = "";

            showSuccessToast(`Expense added by ${paidBy}`);
            console.log(`Expense added by ${paidBy}:`, expense);
        } catch (error) {
            showErrorToast(error.message);
            console.error("Error adding expense:", error);
        }
    }

    handleSimplify() {
        try {
            const results = this.expenseService.simplifyExpenses();
            this.displayResults(results);
        } catch (error) {
            showErrorToast(`Error simplifying expenses: ${error.message}`);
            console.error("Error simplifying expenses:", error);
        }
    }

    addUserToSelect(userName) {
        const option = DOMHelpers.createOption(userName, userName);
        this.elements.expenseUserInput.add(option);
    }

    renderExpense(expense) {
        const text =
            expense.description !== "No description"
                ? `${expense.paidBy} paid ₹${expense.amount} for ${expense.description}`
                : `${expense.paidBy} paid ₹${expense.amount}`;

        const listItem = DOMHelpers.createListItem(text, "expense-item");
        this.elements.paymentList.appendChild(listItem);
    }

    displayResults(results) {
        DOMHelpers.clearElement(this.elements.resultArea);

        if (results.length === 0) {
            const noResultsItem = DOMHelpers.createListItem(
                "All expenses are settled!",
                "no-results"
            );
            this.elements.resultArea.appendChild(noResultsItem);
            return;
        }

        DOMHelpers.appendFragment(this.elements.resultArea, results, (result) =>
            DOMHelpers.createListItem(result, "settlement-item")
        );
    }

    refreshUI() {
        // Refresh user select options
        DOMHelpers.clearElement(this.elements.expenseUserInput);
        const defaultOption = DOMHelpers.createOption("Select User", "");
        this.elements.expenseUserInput.add(defaultOption);

        this.userService.getUserNames().forEach((name) => {
            this.addUserToSelect(name);
        });

        // Refresh expense list
        DOMHelpers.clearElement(this.elements.paymentList);
        this.expenseService.getAllExpenses().forEach((expense) => {
            this.renderExpense(expense);
        });

        // Clear results
        DOMHelpers.clearElement(this.elements.resultArea);
    }
}
