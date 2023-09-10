const db = require('../db/dbConfig')

/**
 * Finds a specific user based on email and returns the entire user object
 * @param {string} email - email associated with an account
 * @returns {object} credentials for user's account
 */
const findAccount = async email => {
  const ACCOUNT = await db.any('SELECT * FROM users WHERE email=$1', email)
  if (ACCOUNT) {
    return ACCOUNT
  }
  return {message: 'No account found with that email'}
}

/**
 * Finds a specific user based on email and returns the entire user object except for the password
 * @param {string} email - email associated with an account
 * @returns {object} credentials for user's account
 */
const getAccountInfo = async email => {
  const ACCOUNT = await db.any(
    'SELECT user_id,email,name,username,dob,city_state,profile_pic,learning_interest,current_skillset FROM users WHERE email=$1',
    email
  )
  if(ACCOUNT){
    return ACCOUNT
  }
  return {error:'No Account found'}
}
/**
 * adds a user to the database from the credentials given at the signup stage
 * @param {object} account - object with the values needed to create a new account; email password
 * @returns {object} credentials for user's account
 */
const addAccount = async account => {
  const NEW_ACCOUNT = await db.one(
    'INSERT INTO users (name, email, password, username, dob, city_state) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
    [
      account.name,
      account.email,
      account.password,
      account.username,
      account.dob,
      account.city_state,
    ]
  )
  if (NEW_ACCOUNT.email) {
    return NEW_ACCOUNT
  } else {
    return {error: 'Problem occured at create new user'}
  }
}

module.exports = {
  findAccount,
  addAccount,
  getAccountInfo
}
