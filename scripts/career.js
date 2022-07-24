import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let show1 = document.getElementById("show1");
let show2 = document.getElementById("show2");
let show3 = document.getElementById("show3");
let show4 = document.getElementById("show4");
let i = 0;
let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let nav4 = document.getElementById("nav4");
show1.addEventListener("click", () => {
  if (i % 2 == 0) {
    nav1.style.display = "block";
    nav2.style.display = "none";
    nav3.style.display = "none";
    nav4.style.display = "none";
    i++;
  }
   else {
    nav1.style.display = "none";
    i++;
  }

  // nav1.style.display = "block";
  //   nav2.style.display = "none";
  //   nav3.style.display = "none";
  //   nav4.style.display = "none";
});

show2.addEventListener("click", () => {
  if (i % 2 == 0) {
    nav2.style.display = "block";
    nav1.style.display = "none";
    nav3.style.display = "none";
    nav4.style.display = "none";
    i++;
  }
   else {
    nav2.style.display = "none";
    i++;
  }
  // nav2.style.display = "block";
  // nav1.style.display = "none";
  // nav3.style.display = "none";
  // nav4.style.display = "none";
});

show3.addEventListener("click", () => {
  if (i % 2 == 0) {
    nav3.style.display = "block";
    nav2.style.display = "none";
    nav1.style.display = "none";
    nav4.style.display = "none";
    i++;
  }
   else {
    nav3.style.display = "none";
    i++;
  }
  // nav3.style.display = "block";
  // nav2.style.display = "none";
  // nav1.style.display = "none";
  // nav4.style.display = "none";
});

show4.addEventListener("click", () => {
  if (i % 2 == 0) {
    nav4.style.display = "block";
    nav2.style.display = "none";
    nav3.style.display = "none";
    nav1.style.display = "none";
    i++;
  }
   else {
    nav4.style.display = "none";
    i++;
  }
  // nav4.style.display = "block";
  // nav2.style.display = "none";
  // nav3.style.display = "none";
  // nav1.style.display = "none";
});

import footer from "../components/footer.js";

document.getElementById("foot").innerHTML = footer();


document.querySelector("#mid").innerHTML=`
  <p>Open roles</p>
  <div>
    <label id="firstlb" for="filter_by_department"
      >Filter by department</label
    >
    <br />
    <select id="department">
      <option value="All Department">All Department</option>
      <option value="Customer Success">Customer Success</option>
      <option value="Finance & Business Oprations">
        Finance & Business Oprations
      </option>
      <option value="IT">IT</option>
      <option value="Marketing">Marketing</option>
      <option value="People">People</option>
      <option value="Product">Product</option>
      <option value="Professtional Services">Professtional Services</option>
      <option value="R&D">R&D</option>
      <option value="Sales">Sales</option>
      <option value="Support">Support</option>
    </select>
  </div>
  <div>
    <label id="secondlb" for="filter_by_location">Filter by location</label>
    <br />
    <select id="location">
      <option value="All location">All Location</option>
      <option value="Anywhere in the United States">
        Anywhere in the United States
      </option>
      <option value="Dublin, Ireland">Dublin, Ireland</option>
      <option value="Denver">Denver</option>
      <option value="Ontario or British Columbia">
        Ontario or British Columbia
      </option>
    </select>
  </div>
  <div>
    <label for=""></label>
    <br />
    <button id="apply">Apply Filters</button>
  </div>
  <div id="clear">
    <label for=""></label>
    <br />
    <p>Clear</p>
  </div>
`

document.querySelector("#last").innerHTML= `
  <p>Customer Success</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Associate Technical Writer</h4>
      <p>Anywhere in the United States</p>
      <h4>Enterprise Senior Customer Success Manager</h4>
      <p>Anywhere in the United States</p>
      <h4>Team Manager, Enterprise Customer Success</h4>
      <p>Anywhere in the United States</p>
      <h4>Technical Writerm, Platform and Partnerships</h4>
    </div>
    <div>
      <p>Anywhere in the United States</p>
      <h4>Technical Writer, Product</h4>
      <p>Dublin, Ireland</p>
      <h4>Don't see what you're looking for?</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>Finance & Business Operations</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Corporate FP&A Manager</h4>
      <p>Anywhere in the United States</p>
      <h4>Sales Compensation Program Manager</h4>
      <p>Anywhere in the United States</p>
      <h4>Senior FP&A Analyst</h4>
    </div>
    <div>
      <p>Anywhere in the United States</p>
      <h4>Senior FP&A Analyst(Non-Revenue)</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>IT</p>
  <div class="name">
    <div>
      <p>Denver</p>
      <h4>IT Engineer</h4>
    </div>
  </div>
  <hr />
  <p>Marketing</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Field Marketing Manager, Enterprise</h4>
      <p>Dublin, Ireland</p>
      <h4>Growth Marketing Manager</h4>
      <p>Anywhere in the United States</p>
      <h4>Senior Manager, Analyst Relations</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>People</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Global Policy & Compliance Analyst</h4>
      <p>Anywhere in the United States</p>
      <h4>Manager,Compensation</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>Product</p>
  <div class="name">
    <div>
      <p>Ontario or British Columbia</p>
      <h4>Product Manager</h4>
      <p>Anywhere in the United States</p>
      <h4>Senior Product Designer, Design Systems</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
      <p>Ontario or British Columbia</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>Professtional Services</p>
  <div class="name">
    <div>
      <p>Dublin, Ireland</p>
      <h4>Senior Manager, Integration Cousulting</h4>
      <p>Dublin, Ireland</p>
      <h4>Strategic Consultanat</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>R&D</p>
  <div class="name">
    <div>
      <p>Ontario or British Columbia</p>
      <h4>Director of Engineering</h4>
      <p>Ontario or British Columbia</p>
      <h4>Full Stack Software Engineer</h4>
      <p>Ontario or British Columbia</p>
      <h4>Senior Security Engineer</h4>
      <p>Ontario or British Columbia</p>
      <h4>Technical Writerm, Platform and Partnerships</h4>
    </div>
    <div>
      <p>Ontario or British Columbia</p>
      <h4>Software Engineer Manager</h4>
      <p>Dublin, Ireland</p>
      <h4>Support Engineer</h4>
      <p>Ontario or British Columbia</p>
      <h4>Don't see what you're looking for?</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>Sales</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Enterprise Acount Director</h4>
      <p>Anywhere in the United States</p>
      <h4>Enterprise Acount Director - Portuguese Speaking</h4>
      <p>Dublin, Ireland</p>
      <h4>Enterprise Acount Manager</h4>
    </div>
    <div>
      <p>Anywhere in the United States</p>
      <h4>Team Manager, Mid Market Sales</h4>
      <p>Anywhere in the United States</p>
      <h4>Don't see what you're looking for?</h4>
      <p>Dublin, Ireland</p>
      <h4>Don't see what you're looking for?</h4>
    </div>
  </div>
  <hr />
  <p>Support</p>
  <div class="name">
    <div>
      <p>Anywhere in the United States</p>
      <h4>Support Systems Admin</h4>
    </div>
  </div>
`