// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
// 1. Get on submit do something.
// 2. Get data from form  type , desc, value.
// 3. Add those  above data to collection based on InnerHtml
// 4. Add item to the container using insertAdjescentHTML('afterbegin',newHTMLElement)
// 5. Need to add class name based on type + and -
// 6. Need to make input data clear
// 7.

function l(x) {
  return console.log(x);
}
function d(x) {
  return console.log(x);
}

function DateTimeFormat() {
  let date = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let hour = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 01,
    14: 02,
    15: 03,
  };

  const getMonthIndex = date.getMonth();
  const monthName = month[getMonthIndex];

  const getDayIndex = date.getDay();
  const getDayName = day[getDayIndex];

  const getDay = date.getDate();
  const getFullYear = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  const fullDate = `${getDay} ${monthName} ${strTime} `;
  return fullDate;
}

const form = document.querySelector("#ewallet-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.querySelector(".add__type").value;
  const desc = document.querySelector(".add__description").value;
  const amount = document.querySelector(".add__value").value;
  const date = DateTimeFormat();
  if (
    (type.length = 1 && desc.length > 0 && amount.length > 0 && date != null)
  ) {
    l();
    ItemCollection();
    addToLocal(type, desc, amount, date);
    restForm();
  } else {
    alert("Data not found");
  }

  IncomeExpance();
});
IncomeExpance();
function IncomeExpance() {
  let transaction = ItemCollection();
  const income = document.querySelector(".income__amount p");
  const expance = document.querySelector(".expense__amount p");
  income.textContent = transaction.income;
  expance.textContent = transaction.expance;
  const totalBalance = parseInt(transaction.income) - transaction.expance;
  document.querySelector(".balance__amount p").textContent = totalBalance;
  const mEl = document.querySelector("header");
  if (totalBalance <= 0) {
    mEl.className = "red";
  } else {
    mEl.className = "green";
  }
}

function ItemCollection() {
  let income = 0;
  let expance = 0;
  let getData = WalletItems();
  if (getData) {
    document.querySelector(".collection").innerHTML = "";
    for (const data of getData) {
      if (data.type == "+") {
        income += parseInt(data.amount);
      } else {
        expance += parseInt(data.amount);
      }

      addItems(data.type, data.desc, data.amount, data.date);
    }
  }

  l(income);
  l(expance);
  return {
    income: income,
    expance: expance,
  };
}
function WalletItems() {
  let items = JSON.parse(localStorage.getItem("items"));
  return items;
}

function addToLocal(a, b, c, d) {
  let myItem = {
    type: a,
    desc: b,
    amount: c,
    date: d,
  };
  let items = localStorage.getItem("items");
  if (items) {
    items = JSON.parse(items);
  } else {
    items = [];
  }
  items.push(myItem);
  l(items);
  localStorage.setItem("items", JSON.stringify(items));
}

function addItems(type, desc, amount, date) {
  const newHTML = `
  <div class="item" ondblClick="remove(this)">
  <div class="item-description-time">
    <div class="item-description">
      <p>${desc}</p>
    </div>
    <div class="item-time">
      <p>${date}</p>
    </div>
  </div>
  <div class="item-amount ${type === "+" ? "income-amount" : "expense-amount"}">
    <p>${type === "+" ? "+" : "-"}$${amount}</p>
  </div>
</div>
  `;
  const collection = document.querySelector(".collection");
  collection.insertAdjacentHTML("afterbegin", newHTML);
}

function restForm() {
  document.querySelector(".add__value").value = "";
  document.querySelector(".add__description").value = "";
}

function remove(el) {
  var element = el;
  element.remove();
}

let getItems = localStorage.getItem("items");
l(getItems);
