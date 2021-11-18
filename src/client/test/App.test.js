import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            items: [
              {
                id: 1001,
                name: "Kale Caesar Pasta",
                dietaries: ["v", "ve", "df", "gf", "n!"],
              },
              {
                id: 1002,
                name: "Hake & Smoky Chickpeas",
                dietaries: ["gf", "df", "rsf"],
              },
              {
                id: 1003,
                name: "Dill & Swiss Chard Potato Cakes",
                dietaries: ["gf", "df", "v", "ve", "n!"],
              },
            ],
          }),
      })
    );
  });

  it("Component should render without errors", async () => {
    await act(async () => render(<App />));
    expect(screen.getByText("Kale Caesar Pasta")).toBeInTheDocument();
  });

  it("Component should render left-hand sidebar with data from the api", async () => {
    await act(async () => render(<App />));
    expect(document.querySelector(".item-picker").childNodes.length).toEqual(3);
  });

  it("Users should be able to select items in the left-hand sidebar and have them appear in the Menu Preview", async () => {
    await act(async () => render(<App />));
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      0
    );
    const itemButton = document
      .querySelector(".item-picker")
      .childNodes[0].querySelector("button");
    fireEvent.click(itemButton);
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      1
    );
  });
  it("Users should be able to filter items in the left-hand sidebar by name", async () => {
    await act(async () => render(<App />));
    expect(global.fetch).toHaveBeenCalledTimes(1);
    const input = document.querySelector(".form-control");
    await act(async () =>
      fireEvent.change(input, { target: { value: "Kale" } })
    );
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toBeCalledWith("http://localhost:8080/api/items/Kale");
  });

  it("Users should be able to remove items from the menu by clicking the (x)", async () => {
    await act(async () => render(<App />));
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      0
    );
    const itemAddButton = document
      .querySelector(".item-picker")
      .childNodes[0].querySelector("button");
    fireEvent.click(itemAddButton);
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      1
    );
    const itemRemoveButton = document
      .querySelector(".menu-preview")
      .childNodes[0].querySelector("button");
    fireEvent.click(itemRemoveButton);
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      0
    );
  });

  it("Users should be able to remove one item per time from the menu by clicking the (x)", async () => {
    await act(async () => render(<App />));
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      0
    );
    document.querySelector(".item-picker").childNodes.forEach((child) => {
      fireEvent.click(child.querySelector("button"));
    });

    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      3
    );
    const itemRemoveButton = document
      .querySelector(".menu-preview")
      .childNodes[0].querySelector("button");
    fireEvent.click(itemRemoveButton);
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      2
    );
  });

  it("Component should show the total number of selected items in the header", async () => {
    await act(async () => render(<App />));
    expect(document.querySelector(".menu-preview").childNodes.length).toEqual(
      0
    );
    document.querySelector(".item-picker").childNodes.forEach((child) => {
      fireEvent.click(child.querySelector("button"));
    });
    expect(screen.getByText("3 items")).toBeInTheDocument();
    const itemRemoveButton = document
      .querySelector(".menu-preview")
      .childNodes[0].querySelector("button");
    fireEvent.click(itemRemoveButton);
    expect(screen.getByText("2 items")).toBeInTheDocument();
  });

  it("Component should show the total number of each dietary type selected in the header", async () => {
    await act(async () => render(<App />));

    let listOfDietaries = document
      .querySelector(".menu-summary")
      .querySelectorAll(".dietary");
    expect(listOfDietaries.length).toEqual(0);
    document.querySelector(".item-picker").childNodes.forEach((child) => {
      fireEvent.click(child.querySelector("button"));
    });

    listOfDietaries = document
      .querySelector(".menu-summary")
      .querySelectorAll(".dietary");
    expect(listOfDietaries.length).toEqual(6);

    const itemRemoveButton = document
      .querySelector(".menu-preview")
      .childNodes[1].querySelector("button");
    fireEvent.click(itemRemoveButton);
    listOfDietaries = document
      .querySelector(".menu-summary")
      .querySelectorAll(".dietary");
    expect(listOfDietaries.length).toEqual(5);
  });
});
