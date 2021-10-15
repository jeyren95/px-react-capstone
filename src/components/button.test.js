import { Button } from "./button";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

test("<Button />", () => {
  const handleClick = jest.fn();
  const { container } = render(
    <Button type="button" variant="primary" onClick={handleClick}>
      Click me!
    </Button>
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="
            inline-flex
            justify-center
            items-center
            py-2
            px-4
            border
            shadow-sm
            text-sm
            font-medium
            rounded-md
            focus:outline-none  
            focus:ring-2 
            focus:ring-offset-2
             text-white border-transparent bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
      type="button"
    >
      Click me!
    </button>
  `);

  user.click(screen.getByText("Click me!"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
