# Frontend (React) Engineer Coding Challenge

This assignment evaluates your skills in building React applications and interacting with APIs.

## Task

Develop a two-page e-commerce application using React that fetches product data from the DummyJSON API (https://dummyjson.com/docs/products).

## Pages

### 1. Products Listing Page (/)

- Fetch all products data from the DummyJSON API endpoint (`/products`).
- Display a list of products with the following information:
  - Product image (use the `thumbnail` property from the API response)
  - Product title
  - Product price

### 2. Product Details Page (/products/:productId)

- On click of any product on the Product Listing Page, show this product details page.
- Dynamically fetch product details based on the `productId` parameter in the URL. Use the DummyJSON API endpoint (`/products/:productId`).
- Display detailed information about the product, including:
  - Product image (use the `images` property from the API response)
  - Product title
  - Product description
  - Product price
  - Discount percentage (if available)
  - Rating
  - Brand
  - Category

## Bonus Points

- Implement pagination on the Products Listing Page using the `limit` and `skip` query parameters of the DummyJSON API. Each page should display 10 products.

## Requirements

- Use React to build the application. You can use Next.js / Remix if required.
- Implement proper error handling for components and API calls.
- Add any necessary CSS styling to enhance the user experience.
- Use clean and maintainable code.

## Deliverables

- A GitHub repository link or zipped folder containing your project's source code.
- A README file with instructions on how to run the application.

## Evaluation Criteria

- Functionality and adherence to requirements.
- Code quality, readability, maintainability, and adherence to best practices including testing.
- Use of modern front-end development practices and frameworks (e.g., functional components, hooks).
- Handling of loading states and errors gracefully.

## Additional Notes

- You can use any CSS framework or styling library of your choice (e.g., Bootstrap, Tailwind CSS).
- Feel free to use any state management library like Redux or Context API if needed.
- Feel free to use any additional libraries or tools you deem necessary to complete the task efficiently. We value clean, well-structured code and thoughtful design choices.

Good luck!
