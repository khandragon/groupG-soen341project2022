import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./components/Header";

// test utils file
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

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
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// test("loads and displays greeting", async () => {
//   renderWithRouter(<Header />);

//   fireEvent.click(screen.getByTestId("PersonalBtn"));

//   await waitFor(() => screen.getByTestId("LoginHeader"));

//   expect(screen.getByTestId("LoginHeader")).toHaveTextContent("Login");
// });

test("click Prods", async () => {
  renderWithRouter(<Header />);

  fireEvent.click(screen.getByText("Products"));

  await waitFor(() => screen.getByText("Our Products"));

  expect(screen.getByText("Our Products")).toHaveTextContent("Our Products");
});
