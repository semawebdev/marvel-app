import { render, screen } from "@testing-library/react";
import {HeroesTable} from "./components";


describe("<HeroesTable />", () => {
  it("should display loading text when loading", () => {
    render(<HeroesTable feature="name" heroes={[{}]} error={null} isLoading={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});