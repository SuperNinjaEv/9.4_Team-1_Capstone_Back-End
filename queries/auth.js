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
    'SELECT user_id, email, name, username, dob, city_state, profile_pic, learning_interest, current_skillset, aboutme FROM users WHERE email=$1',
    email
  )
  if (ACCOUNT) {
    return ACCOUNT
  }
  return {error: 'No Account found'}
}
/**
 * adds a user to the database from the credentials given at the signup stage
 * @param {object} account - object with the values needed to create a new account; email password
 * @returns {object} credentials for user's account
 */
const addAccount = async account => {
  console.log(account)
  const NEW_ACCOUNT = await db.one(
    'INSERT INTO users (name, email, password, username, dob, city_state, aboutme) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [
      account.name,
      account.email,
      account.password,
      account.username,
      account.dob,
      account.city_state,
      account.aboutme,
    ]
  )
  if (NEW_ACCOUNT.email) {
    return NEW_ACCOUNT
  } else {
    return {error: 'Problem occured at create new user'}
  }
}

const updateAccount = async update => {
  const updatedUser = await db.one(
    'UPDATE users SET profile_pic=$1, learning_interest=$2, current_skillset=$3, aboutme=$4, city_state=$5 WHERE user_id=$6 RETURNING *',
    [
      update.profile_pic,
      update.learning_interest,
      update.current_skillset,
      update.aboutme,
      update.city_state,
      update.user_id,
    ]
  )
  if (!updatedUser.error) {
    return updatedUser
  }
  return updatedUser.error
}

module.exports = {
  findAccount,
  addAccount,
  getAccountInfo,
  updateAccount,
}
