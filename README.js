alert('codes will ne here')

import java.util.Date;
import java.util.Scanner;

// Abstract Person class
abstract class Person {
    protected String name;
    protected String contactDetails;

    public Person(String name, String contactDetails) {
        this.name = name;
        this.contactDetails = contactDetails;
    }

    public abstract String getDetails();
}

// CustomerClass extending Person
class CustomerClass extends Person {
    private String customerID;

    public CustomerClass(String customerID, String name, String contactDetails) {
        super(name, contactDetails);
        this.customerID = customerID;
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getContactDetails() {
        return contactDetails;
    }

    @Override
    public String getDetails() {
        return "Customer ID: " + customerID + ", Name: " + name + ", Contact: " + contactDetails;
    }
}

// EmployeeClass extending Person
class EmployeeClass extends Person {
    private String employeeID;
    private String role;
    private String username;
    private String password;

    public EmployeeClass(String employeeID, String name, String role, String username, String password) {
        super(name, null); // No contact details for employees in this example
        this.employeeID = employeeID;
        this.role = role;
        this.username = username;
        this.password = password;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    @Override
    public String getDetails() {
        return "Employee ID: " + employeeID + ", Name: " + name + ", Role: " + role;
    }
}

// ProductClass
class ProductClass {
    private String productID;
    private String name;
    private float price;
    private String category;

    public ProductClass(String productID, String name, float price, String category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

// OrderClass
class OrderClass {
    private String orderID;
    private Date date;
    private float totalAmount;
    private ProductClass[] products;
    private Person customerOrEmployee; // Demonstrates polymorphism

    public OrderClass(String orderID, Date date, float totalAmount, ProductClass[] products, Person customerOrEmployee) {
        this.orderID = orderID;
        this.date = date;
        this.totalAmount = totalAmount;
        this.products = products;
        this.customerOrEmployee = customerOrEmployee;
    }

    public String getOrderID() {
        return orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public float getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(float totalAmount) {
        this.totalAmount = totalAmount;
    }

    public ProductClass[] getProducts() {
        return products;
    }

    public void setProducts(ProductClass[] products) {
        this.products = products;
    }

    public Person getCustomerOrEmployee() {
        return customerOrEmployee;
    }

    public void setCustomerOrEmployee(Person customerOrEmployee) {
        this.customerOrEmployee = customerOrEmployee;
    }
}

// InventoryClass
class InventoryClass {
    private ProductClass[] products;

    public InventoryClass(ProductClass[] products) {
        this.products = products;
    }

    public ProductClass[] getProducts() {
        return products;
    }

    public void setProducts(ProductClass[] products) {
        this.products = products;
    }
}

// Main POSApplication class
   class POSApplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Create ProductClass object
        System.out.println("Enter product details:");
        System.out.print("Product ID: ");
        String productID = scanner.nextLine();
        System.out.print("Product Name: ");
        String productName = scanner.nextLine();
        System.out.print("Product Price: ");
        float productPrice = scanner.nextFloat();
        scanner.nextLine();  // Consume newline left-over
        System.out.print("Product Category: ");
        String productCategory = scanner.nextLine();
        ProductClass product1 = new ProductClass(productID, productName, productPrice, productCategory);

        // Create EmployeeClass object
        System.out.println("\nEnter employee details:");
        System.out.print("Employee ID: ");
        String employeeID = scanner.nextLine();
        System.out.print("Employee Name: ");
        String employeeName = scanner.nextLine();
        System.out.print("Employee Role: ");
        String employeeRole = scanner.nextLine();
        System.out.print("Employee Username: ");
        String employeeUsername = scanner.nextLine();
        System.out.print("Employee Password: ");
        String employeePassword = scanner.nextLine();
        EmployeeClass employee1 = new EmployeeClass(employeeID, employeeName, employeeRole, employeeUsername, employeePassword);

        // Create CustomerClass object
        System.out.println("\nEnter customer details:");
        System.out.print("Customer ID: ");
        String customerID = scanner.nextLine();
        System.out.print("Customer Name: ");
        String customerName = scanner.nextLine();
        System.out.print("Customer Contact Details: ");
        String customerContactDetails = scanner.nextLine();
        CustomerClass customer1 = new CustomerClass(customerID, customerName, customerContactDetails);

        // Create OrderClass object
        OrderClass order1 = new OrderClass("Order001", new Date(), productPrice, new ProductClass[]{product1}, customer1);

        // Create InventoryClass object
        InventoryClass inventory1 = new InventoryClass(new ProductClass[]{product1});

        // Use objects
        System.out.println("\nOrder ID: " + order1.getOrderID());
        System.out.println("Employee Name: " + employee1.getName());
        System.out.println("Customer Contact Details: " + customer1.getContactDetails());
        System.out.println("Product Name in Inventory: " + inventory1.getProducts()[0].getName());

        // Demonstrate polymorphism
        OrderClass order2 = new OrderClass("Order002", new Date(), productPrice + 7.0f, new ProductClass[]{product1}, employee1);
        System.out.println("Details of Customer/Employee in Order 2: " + order2.getCustomerOrEmployee().getDetails());
    }
}
