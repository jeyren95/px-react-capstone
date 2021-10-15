import { Label } from "./label";
import { render } from "@testing-library/react";

test("<Label />", () => {
  const { container } = render(<Label>This is a label</Label>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <label
      class="block text-sm font-medium text-gray-900"
    >
      This is a label
    </label>
  `);
});
