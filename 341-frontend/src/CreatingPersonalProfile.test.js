import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("http://localhost:8000/api/products/", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: [
          {
            _id: "62463ef94dca36f666cf1791",
            title: "To Kill a Mockingbird",
            sellerName: "Harper Lee",
            description:
              "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and dee",
            category: "Historical Fiction",
            imgUrl:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
            Price: 55.18,
            ShippingCost: 9,
            Sale: null,
            isbn: "896862799-1",
          },
          {
            _id: "62463ef94dca36f666cf1792",
            title: "1984",
            sellerName: "George Orwell",
            description:
              "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's pre",
            category: "Science Fiction",
            imgUrl:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
            Price: 54.8,
            ShippingCost: 29,
            Sale: null,
            isbn: "523477733-2",
          },
          {
            _id: "62463ef94dca36f666cf1793",
            title: "Harry Potter and the Sorcerer's Stone",
            sellerName: "J.K. Rowling",
            description:
              "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft ",
            category: "Fantasy",
            imgUrl:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
            Price: 6.62,
            ShippingCost: null,
            Sale: null,
            isbn: "725869012-3",
          },
          {
            _id: "62463ef94dca36f666cf1794",
            title: "The Hobbit, or There and Back Again",
            sellerName: "J.R.R. Tolkien",
            description:
              "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now",
            category: "Adventure",
            imgUrl:
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
            Price: 35.25,
            ShippingCost: 50,
            Sale: null,
            isbn: "757594069-3",
          },
        ],
      })
    );
  }),
  rest.post("http://localhost:8000/api/user/", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        id: "tester",
        message: "User created!",
      })
    );
  }),
  rest.post("http://localhost:8000/api/accounts/", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        id: "tester",
        message: "Account created!",
      })
    );
  }),
  rest.post("http://localhost:8000/api/products/", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        id: "tester",
        message: "Account created!",
      })
    );
  }),
  rest.get("http://localhost:8000/api/user/tester", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          _id: "62547d275d16bc9946b64677",
          username: "tester",
          password: "tester",
          createdAt: "2022-04-11T19:10:31.463Z",
          updatedAt: "2022-04-11T19:10:31.463Z",
          __v: 0,
        },
      })
    );
  }),
  rest.get("http://localhost:8000/api/user/testerB", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          _id: "62547d275d16bc9946b64677",
          username: "testerB",
          password: "testerB",
          createdAt: "2022-04-11T19:10:31.463Z",
          updatedAt: "2022-04-11T19:10:31.463Z",
          __v: 0,
        },
      })
    );
  }),
  rest.get("http://localhost:8000/api/accounts/testerB", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          _id: "62562df161d6a6aa56579398",
          username: "testerB",
          email: "testerB",
          business: false,
          full_name: "testerB testerB",
          address: "testerB",
          cartID: 67915,
          createdAt: "2022-04-13T01:57:05.492Z",
          updatedAt: "2022-04-13T01:57:05.492Z",
          __v: 0,
        },
      })
    );
  }),
  rest.get("http://localhost:8000/api/accounts/tester", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          _id: "62562df161d6a6aa56579398",
          username: "tester",
          email: "tester",
          business: false,
          full_name: "tester tester",
          address: "tester",
          cartID: 67915,
          createdAt: "2022-04-13T01:57:05.492Z",
          updatedAt: "2022-04-13T01:57:05.492Z",
          __v: 0,
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});
afterAll(() => server.close());

test("Loads The Webpage", async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("PersonalBtn"));
  await waitFor(() => {
    expect(screen.getByTestId("LoginHeader")).toHaveTextContent(/login/i);
  });
});

test("Click and Display Products", async () => {
  render(<App />);

  fireEvent.click(screen.getByText("Products"));

  await waitFor(() => {
    expect(screen.getByText(/our products/i)).toHaveTextContent(
      /our products/i
    );
  });
});

test("Register Personal Account", async () => {
  const user = userEvent.setup();
  render(<App />);

  fireEvent.click(screen.getByTestId("PersonalBtn"));
  fireEvent.click(screen.getByTestId("RegisterLinkBtn"));
  fireEvent.click(screen.getByTestId("PersonalRegisterBtn"));

  await user.type(screen.getByTestId("UsernameIn"), "tester");
  await user.type(screen.getByTestId("FirstNameIn"), "tester");
  await user.type(screen.getByTestId("LastNameIn"), "tester");
  await user.type(screen.getByTestId("EmailIn"), "tester");
  await user.type(screen.getByTestId("AddressIn"), "tester");
  await user.type(screen.getByTestId("PhoneIn"), "1111111111");
  await user.type(screen.getByTestId("PasswordIn"), "tester");
  fireEvent.click(screen.getByTestId("RegisterAccBtn"));

  await screen.findByTestId("LoginUserIn");
  await user.type(screen.getByTestId("LoginUserIn"), "tester");
  await user.type(screen.getByTestId("LoginPassIn"), "tester");
  fireEvent.click(screen.getByTestId("LoginAccBtn"));

  const status = await screen.findByTestId("loginStatus");
  expect(status).toHaveTextContent(/hello tester/i);
});

test("Register Buisness Account", async () => {
  const user = userEvent.setup();
  render(<App />);

  fireEvent.click(screen.getByTestId("PersonalBtn"));
  fireEvent.click(screen.getByTestId("RegisterLinkBtn"));
  fireEvent.click(screen.getByTestId("BusinessRegisterBtn"));

  await user.type(screen.getByTestId("UsernameIn"), "testerB");
  await user.type(screen.getByTestId("FirstNameIn"), "testerB");
  await user.type(screen.getByTestId("LastNameIn"), "testerB");
  await user.type(screen.getByTestId("EmailIn"), "testerB");
  await user.type(screen.getByTestId("AddressIn"), "testerB");
  await user.type(screen.getByTestId("PhoneIn"), "1111111121");
  await user.type(screen.getByTestId("PasswordIn"), "testerB");
  fireEvent.click(screen.getByTestId("RegisterAccBtn"));

  await screen.findByTestId("LoginUserIn");
  await user.type(screen.getByTestId("LoginUserIn"), "testerB");
  await user.type(screen.getByTestId("LoginPassIn"), "testerB");
  fireEvent.click(screen.getByTestId("LoginAccBtn"));

  const status = await screen.findByTestId("loginStatus");
  expect(status).toHaveTextContent(/hello testerB/i);
});

test("Access Order History", async () => {
  render(<App />);
  const user = userEvent.setup();

  fireEvent.click(screen.getByTestId("PersonalBtn"));

  await screen.findByTestId("LoginUserIn");
  await user.type(screen.getByTestId("LoginUserIn"), "tester");
  await user.type(screen.getByTestId("LoginPassIn"), "tester");
  fireEvent.click(screen.getByTestId("LoginAccBtn"));

  const status = await screen.findByTestId("loginStatus");
  expect(status).toHaveTextContent(/hello tester/i);

  fireEvent.click(screen.getByTestId("PersonalBtn"));
  fireEvent.click(screen.getByTestId("OrderHistoryBtn"));

  await waitFor(() => {
    expect(screen.getByTestId("OrderHistoryTitle")).toHaveTextContent(
      /Order History/i
    );
  });
});

// test("Seller Modify Product", async () => {
//   render(<App />);
//   const user = userEvent.setup();

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");
//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("PersonalBtn"));
//   fireEvent.click(screen.getByTestId("ProductsListBtn"));
//   fireEvent.click(screen.getByTestId("ProductList-0"));
//   fireEvent.click(screen.getByTestId("EditProductBtn"));
//   await user.type(screen.getByTestId("TitleIn"), "test123");
//   fireEvent.click(screen.getByTestId("SaveChanges"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Seller Creates New Product", async () => {
//   render(<App />);
//   const user = userEvent.setup();

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");
//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("PersonalBtn"));
//   fireEvent.click(screen.getByTestId("ProductsListBtn"));

//   fireEvent.click(screen.getByTestId("CreateProductBtn"));
//   await user.type(screen.getByTestId("TitleIn"), "test123");
//   await user.type(screen.getByTestId("CategoryIn"), "test123");
//   await user.type(screen.getByTestId("DescriptionIn"), "test123");
//   await user.type(screen.getByTestId("PriceIn"), "test123");
//   await user.type(screen.getByTestId("ImgUrlIn"), "test123");
//   await user.type(screen.getByTestId("ShippingIn"), "test123");
//   await user.type(screen.getByTestId("SaleIn"), "test123");
//   fireEvent.click(screen.getByTestId("SaveChanges"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("View Products", async () => {
//   render(<App />);

//   fireEvent.click(screen.getByTestId("Products-Header"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Search Products", async () => {
//   render(<App />);
//   const user = userEvent.setup();

//   fireEvent.click(screen.getByTestId("Products-Header"));
//   await user.type(screen.getByTestId("SearchIn"), "Harry");

//   //click then
//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Check Cart", async () => {
//   render(<App />);
//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");
//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("CartBtn"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Delete Item Cart", async () => {
//   render(<App />);

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");

//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("ProductCard-0"));
//   fireEvent.click(screen.getByTestId("AddCartBtn"));
//   fireEvent.click(screen.getByTestId("CartBtn"));
//   fireEvent.click(screen.getByTestId("DeleteCartItemBtn "));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Add Item Cart", async () => {
//   render(<App />);

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");

//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("ProductCard-0"));
//   fireEvent.click(screen.getByTestId("AddCartBtn"));
//   fireEvent.click(screen.getByTestId("CartBtn"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });

// test("Checkout Item Cart", async () => {
//   render(<App />);

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await screen.findByTestId("LoginUserIn");
//   await user.type(screen.getByTestId("LoginUserIn"), "tester");
//   await user.type(screen.getByTestId("LoginPassIn"), "tester");

//   fireEvent.click(screen.getByTestId("LoginAccBtn"));

//   fireEvent.click(screen.getByTestId("ProductCard-0"));
//   fireEvent.click(screen.getByTestId("AddCartBtn"));
//   fireEvent.click(screen.getByTestId("CartBtn"));

//   fireEvent.click(screen.getByTestId("procToShip"));
//   fireEvent.click(screen.getByTestId("CartBtn"));
//   fireEvent.click(screen.getByTestId("procToShip"));

//   await waitFor(() => {
//     expect(screen.getByText("test123")).toHaveTextContent("test123");
//   });
// });
