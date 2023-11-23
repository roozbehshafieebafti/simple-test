import { render } from "@testing-library/react";
import { UserTable } from "../UserTable";
import { User } from "../Apis/Users/Types";

// Mocking the User data for testing
export const mockUser: User = {
  gender: "female",
  name: {
    title: "Ms",
    first: "Mihaela",
    last: "Perić",
  },
  location: {
    street: {
      number: 9235,
      name: "Obrenovačka",
    },
    city: "Ivanjica",
    state: "Moravica",
    country: "Serbia",
    postcode: 91336,
    coordinates: {
      latitude: "59.3156",
      longitude: "175.8323",
    },
    timezone: {
      offset: "-5:00",
      description: "Eastern Time (US & Canada), Bogota, Lima",
    },
  },
  email: "mihaela.peric@example.com",
  login: {
    uuid: "88d4e945-e70d-48f8-be58-c1d4c4db694e",
    username: "orangerabbit181",
    password: "fortune",
    salt: "Cc1G0GC4",
    md5: "4d818f761366b98a4c8209489973a31e",
    sha1: "283b47475e5f88a3c38da97ea9739c89faa0f289",
    sha256: "050e66d5abc8173cfe062a5c75feefb8a702eed0e6600b54f92b560c0ae04be2",
  },
  dob: {
    date: "1994-03-26T11:59:38.948Z",
    age: 29,
  },
  registered: {
    date: "2007-07-06T06:28:04.914Z",
    age: 16,
  },
  phone: "018-7352-859",
  cell: "065-1997-362",
  id: {
    name: "SID",
    value: "383334816",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/78.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/78.jpg",
    thumbnail: "image-url",
  },
  nat: "RS",
};

describe("UserTable component", () => {
  it("renders the table headers correctly", () => {
    const { getByText } = render(<UserTable user={mockUser} />);
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Last Name")).toBeInTheDocument();
    expect(getByText("Country")).toBeInTheDocument();
    expect(getByText("Picture")).toBeInTheDocument();
  });

  it("renders user data correctly", () => {
    const { getByText, getByAltText } = render(<UserTable user={mockUser} />);

    expect(getByText("Mihaela")).toBeInTheDocument();
    expect(getByText("Perić")).toBeInTheDocument();
    expect(getByText("Serbia")).toBeInTheDocument();

    const imageElement = getByAltText("user");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "image-url");
  });
});
