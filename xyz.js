/**
 *
 */

// ? Neon DB
/**
 * * What is Neon DB.
 * * -> Neon is a serverless PostgreSQL database platform
 * * -> It has created depend on PostgreQL but work with mordan arcitructer on the cloud
 *
 * * Have any alternative platform of Neon DB?
 * * -> Yes, Have a loat form alternative platfomr neon db that given blow:
 * * 1.Supabase 2.Railway 3.Amazon Aurora Serverless 4.Google Cloud AlloyDB
 */

// ? What is Poal?
/**
 * * Backend or Databse working time Pool means that:
 * * Lot of ready-mate connection group with database.
 * * That is reuseable for this every request handle time don't need to create new collection
 *
 * ? What is the benifit to using Pool
 * -> প্রতিবার নতুন connection তৈরি করলে সময় বেশি লাগে
 * -> Increase performance
 * -> Prevents Database overload (Poal have maximun limition [like 10 ] so that data don't loaded)
 * -> Save Resourse so that don't need agian and againg connection create and distroy
 *
 * ? How use Pool with express.js and PostgreSQL
 * * -> pg.Pool({connectionString:"here keep connection string..."})
 */
