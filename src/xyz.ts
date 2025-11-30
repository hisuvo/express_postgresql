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

// ? (Parameterised Query / Safe Query)
/**
    // UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *;
    // [name, email, req.params.id]

    // ⭐ এটা কেমন কুয়েরি?

    // এটা হলো Parameterized Query (বা Prepared Statement)।
    // Node.js (PostgreSQL-এর pg লাইব্রেরি) এ $1, $2, $3 মানে হচ্ছে placeholders।
    // পরে অ্যারের ভ্যালুগুলো নাম্বার অনুযায়ী বসে।

    // ⭐ কেন ব্যবহার করা হয়?
    // 1. SQL Injection Attack থেকে 100% সিকিউর

    // যদি ইউজার name বা email input হিসেবে ভুল বা ক্ষতিকর কোড দেয়, তবুও ডাটাবেজ হ্যাক হবে না।
    // কারণ PostgreSQL আগে ভ্যালুগুলোকে Pure data হিসেবে ধরে।

    // উদাহরণ:

    // ধরো ইউজার name-এ লিখেছে:

    // "; DROP TABLE users; --

    // Parameterized query থাকার কারণে ডাটাবেজ এটি ডাটা হিসেবে নেবে, কোড হিসেবে নয় → টেবিল কখনই ডিলিট হবে না।

    // 2. নিরাপদ ডাটা binding
    // $1 → name
    // $2 → email
    // $3 → id

    // এভাবে ডাটা সঠিকভাবে বসে।

    // 3. ডাটাবেজ পারফরম্যান্স ভালো

    // Prepared statements সাধারণত দ্রুত execute হয়।

    // **4. RETURNING ***

    // কুয়েরি রান শেষে আপডেট হওয়া রো (row) রিটার্ন করে।
    // API response দিতে সুবিধা হয়।

 */

// ? Which is best for delete all rows for data between DELETE FORM users and TRUNCATE TABLE users
/** 
// যদি তুমি শুধু টেবিল পুরো খালি করতে চাও → TRUNCATE TABLE is BEST

// কারণ:

// খুব দ্রুত

// সেফ

// auto increment reset

// কম resource ব্যবহার

// proper clean table structure

// ➤ যদি শর্ত দিয়ে delete করতে চাও → DELETE is BEST

// কারণ:

// WHERE ব্যবহার করা যায়

// constraint এর সাথে compatible

// rollback সাপোর্ট

*/
