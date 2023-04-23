import useSignUpForm from './useSignUpForm';

const SignUpPage = () => {
  const submitForm = () => {
    console.log(inputs);
  };
 
  //const { inputs, errors, handleInputChange, handleSubmit } = useSignUpForm(submitForm);
  const inputs = useSignUpForm(submitForm);
  const errors = useSignUpForm(submitForm);
  const handleInputChange = useSignUpForm(submitForm);
  const handleSubmit = useSignUpForm(submitForm);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value={inputs.firstName} onChange={handleInputChange} />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" value={inputs.lastName} onChange={handleInputChange} />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={inputs.email} onChange={handleInputChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={inputs.password} onChange={handleInputChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpPage;