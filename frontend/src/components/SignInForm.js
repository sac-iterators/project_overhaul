function SignInForm() {
    return(
        <>
            <div className="user-account">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Please enter your username."
                maxLength="30" required></input>
            </div>

            <div className="user-account">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Please enter your password." 
                maxLength="30" required></input>
            </div>
        </>
    );
}

export default SignInForm;
