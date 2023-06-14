import { render, screen } from "@testing-library/react";
import { HeroesTable } from "../components";
import { HARDCODED_HEROES_DATA } from "./constants";

const heroes = HARDCODED_HEROES_DATA.data.results;


describe("<HeroesTable />", () => {
  it("should display loading text when loading", () => {
    render(<HeroesTable feature="name" heroes={heroes} error={null} isLoading={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });


  it("should display empty state when no feature selected", () => {
    render(
      <HeroesTable feature="" heroes={[]} error={null} isLoading={false} />
    );

    expect(screen.queryByTestId("HeroesTable")).not.toBeInTheDocument();
  });


  it("should display error text when there is error", () => {
    render(
      <HeroesTable
        feature="name"
        heroes={heroes}
        error={new Error("some error")}
        isLoading={false}
      />
    );

    expect(
      screen.getByText(
        "Oops, there is any error when trying to load the data..."
      )
    ).toBeInTheDocument();
  });

  it("should display hero cards text when there are heroes data and feature selected", () => {
    render(
      <HeroesTable
        feature="name"
        heroes={heroes}
        error={null}
        isLoading={false}
      />
    );

    expect(screen.getAllByTestId("heroImage")).toHaveLength(heroes.length);
  });

});
