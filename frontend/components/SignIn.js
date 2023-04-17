import Form from './styles/Form';

export default function SignIn() {
  return (
    <Form method="POST">
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            // value
            // onChange
          />
        </label>
      </fieldset>
    </Form>
  );
}
