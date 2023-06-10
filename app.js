const { createClient } = require('@supabase/supabase-js');
require('dotenv').config()

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);


async function insertData() {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name: 'John Doe', email: 'johndoe@example.com' }]);
  
    if (error) {
      console.error(error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  }
  
  insertData();
  