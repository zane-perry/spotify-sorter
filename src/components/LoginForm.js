import styles from '../styles/loginform.css'

const LoginForm = () => {
    return(
        <div className='login-form'>
            <form>
                <label for='username'>Spotify Username:</label>
                <br />
                <input type='text' id='username' name='username'></input>
                <br />
                <label for='password'>Spotify Password:</label>
                <br />
                <input type='text' id='password' name='password'></input>
                <br />
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default LoginForm