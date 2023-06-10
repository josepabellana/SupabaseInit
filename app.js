const { createClient } = require('@supabase/supabase-js');
require('dotenv').config()

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);


async function insertData() {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name: 'Georgina Grant', email: 'ginagrantc@gmail.com' }]);
  
    if (error) {
      console.error(error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  }



  async function insertGoal(title, description, dueDate) {
    const { data, error } = await supabase.from('goals').insert([
      { title, description, due_date: dueDate, status: 'pendiente' }
    ]);
  
    if (error) {
      console.error(error);
    } else {
      console.log('Goal inserted successfully:', data);
    }
  }
  