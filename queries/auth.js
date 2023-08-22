const db = require('../db/dbConfig')

/**
 * Calculates the total price including tax.
 * @param {string} email - email associated with an account
 * @returns {object} credentials for user's account
 */
const findAccount = async email => {
    console.log(email)
  const ACCOUNT = await db.any('SELECT * FROM user_cred WHERE email=$1', email)
  if (ACCOUNT) {
    return ACCOUNT
  }
  return {message: 'No account found with that email'}
}

/**
 * Calculates the total price including tax.
 * @param {object} account - object with the values needed to create a new account; email password
 * @returns {object} credentials for user's account
 */
const addAccount = async account => {
  const NEW_ACCOUNT = await db.one(
    'INSERT INTO user_cred (email, password) VALUES ($1,$2) RETURNING *',
    [account.email, account.password]
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
}
