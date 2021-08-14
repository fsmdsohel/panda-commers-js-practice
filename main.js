// task no: 2
const h2Element = document.getElementsByTagName("h2");

for (const elem of h2Element) {
  elem.style.color = "lightblue";
}

// task no: 3
const backPackSection = document.getElementById("backpack");

backPackSection.style.backgroundColor = "tomato";

// task no: 4
const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.style.borderRadius = "30px";
}

// task no: 5
function print() {
  console.log("Subscribe Now!");
}

// task no: 6
// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

const allBuyNowBtn = document.getElementsByClassName("panda-btn-buy-now");

for (const buyBtn of allBuyNowBtn) {
  buyBtn.addEventListener("click", function (event) {
    event.target.style.display = "none";
  });
}

// task no: 7
// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

const inputField = document.getElementById("ghar-tera");

function emailValidate(event) {
  if (event.target.value == "email") {
    document.getElementById("vabi-ar-sakib-vai").removeAttribute("disabled");
  } else {
    document
      .getElementById("vabi-ar-sakib-vai")
      .setAttribute("disabled", "true");
  }
}

inputField.addEventListener("keyup", function (event) {
  emailValidate(event);
});
inputField.addEventListener("change", function (event) {
  emailValidate(event);
});

// task no: 8
// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।

var image = document.getElementsByClassName("change-img");

let productImg = "";

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseenter", function () {
    productImg = image[i].src;
    image[i].src = `./images/bags/bag-${i + 1}.png`;
  });

  image[i].addEventListener("mouseout", function () {
    image[i].src = productImg;
  });
}

// task no: 9

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।

document.getElementById("subscribe").addEventListener("dblclick", function () {
  document.getElementById("subscribe").style.backgroundColor = "hotpink";
  console.log("hello");
});
