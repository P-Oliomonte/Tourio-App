import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";

export default function CreatePlacePage() {
  const router = useRouter();

  async function handleAddPlace(place) {
    const response = await fetch("api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={handleAddPlace} formName={"add-place"} />
    </>
  );
}

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;
