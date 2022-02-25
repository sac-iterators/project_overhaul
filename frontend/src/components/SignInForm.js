function SignInForm() {
    return(
        <form>

            <div class = "user-account">
                <label for="username" id="username" name="username">Username</label>
                <input type="username" class="form-control" id="username" placeholder="Please enter your username."></input>
            </div>

            <div class = "user-account">
                <label for="password" id="password" name="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Please enter your password."></input>
            </div>

        </form>
    );
}

export default SignInForm;
