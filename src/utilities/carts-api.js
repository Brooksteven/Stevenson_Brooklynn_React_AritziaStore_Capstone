export async function getCarts() {
  try {
    const response = await fetch("http://localhost:3000/carts"); //make a fetch to the host
    const data = await response.json(); //estrapulate the data from the response object
    return data; //update state of the notes state variable to have that data
  } catch (error) {
    console.log(error);
  }
}
