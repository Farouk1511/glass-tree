import PostCard from "../../../components/Helper/PostCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Post Card", () => {
  it("renders default state", () => {
    const dom = render(<PostCard />);

    const postName = dom.container.querySelector("#postName");
    const postTitle = dom.container.querySelector("#postTitle");
    const postDescription = dom.container.querySelector("#postDescription");
    const postAverageRatings = dom.container.querySelector("#postAverageRating");
    const postTotalRating = dom.container.querySelector("#postTotalRatings");
    const postHourlyPay = dom.container.querySelector("#postHourlyRate");

    expect(postName).toHaveTextContent("John Doe");
    expect(postTitle).toHaveTextContent("job/help title");
    expect(postDescription).toHaveTextContent("Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.");
    // expect(postAverageRatings).toHaveValue("4.5");
    expect(postTotalRating).toHaveTextContent("K");
    expect(postHourlyPay).toHaveTextContent("40");
  });

  it('renders using props',() => {
    const post = {
        _id: "dsjhdksdjs",
        name: "John Doe",
        description:
          "Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.",
        title: "job/help title",
        averageRating: 4.5,
        totalRatings: 50,
        ratePerHour: 40,
    }

    const dom = render(<PostCard post={post}/>)

    const postName = dom.container.querySelector("#postName");
    const postTitle = dom.container.querySelector("#postTitle");
    const postDescription = dom.container.querySelector("#postDescription");
    const postAverageRatings = dom.container.querySelector("#postAverageRating");
    const postTotalRating = dom.container.querySelector("#postTotalRatings");
    const postHourlyPay = dom.container.querySelector("#postHourlyRate");

    expect(postName).toHaveTextContent("John Doe");
    expect(postTitle).toHaveTextContent("job/help title");
    expect(postDescription).toHaveTextContent("Currently booking new projects! Clean, efficient, quality work done at a fair price. Call/Text/Email today for your free, no obligation quote. Renovations, new residential builds, Commercial Builds, etc.");
    // expect(postAverageRatings).toHaveValue("4.5");
    expect(postTotalRating).toHaveTextContent("K");
    expect(postHourlyPay).toHaveTextContent("40");
  })
});
