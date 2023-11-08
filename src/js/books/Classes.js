import QRious from "qrious";
class Classes {
  constructor(_parent) {
    this.parent = _parent;
    this.chaptersPath = document.querySelector(
      "i.fa-chalkboard-user"
    ).parentElement.dataset.path;

    const myOffcanvas = document.getElementById("offcanvas-classes");
    myOffcanvas.addEventListener("hidden.bs.offcanvas", (event) => {
      this.showEvents();
    });

    const classesPane = document.getElementById("offcanvas-classes");
    this.editForm = classesPane.querySelector("#event-form");
    this.eventsView = classesPane.querySelector("ul");

    this.titleTxt = classesPane.querySelector("#titleTxt");
    this.meetingUrlTxt = classesPane.querySelector("#meetingUrlTxt");
    this.descriptionTxt = classesPane.querySelector("#descriptionTxt");
    this.eventDateTxt = classesPane.querySelector("#eventDateTxt");

    classesPane.querySelector("i.fa-plus").addEventListener("click", () => {
      this.openEvent({});
    });

    classesPane
      .querySelector("button.btn-primary")
      .addEventListener("click", () => {
        this.saveEvent();
      });

    classesPane
      .querySelector("button.btn-danger")
      .addEventListener("on-confirmation", () => {
        this.deleteEvent();
      });

    this.listEvents();
  }

  openEvent(_event) {
    this.event = _event;
    this.titleTxt.value = this.event.title ? this.event.title : "";
    this.meetingUrlTxt.value = this.event.meetingUrl
      ? this.event.meetingUrl
      : "";
    this.descriptionTxt.value = this.event.description
      ? this.event.description
      : "";
    this.eventDateTxt.value = this.event.eventDate ? this.event.eventDate : "";
    this.eventsView.classList.add("d-none");
    this.editForm.classList.remove("d-none");
  }

  saveEvent() {
    this.event.title = this.titleTxt.value;
    this.event.meetingUrl = this.meetingUrlTxt.value;
    this.event.description = this.descriptionTxt.value;
    this.event.eventDate = this.eventDateTxt.value;
    if (this.event.id) {
      fetch("/api/events/" + this.event.id, {
        method: "PUT",
        headers: window.ApplicationHeader(),
        body: JSON.stringify(this.event),
      })
        .then((response) => response.json())
        .then(() => {
          window.success("Event updated successfully");
          this.listEvents();
        });
    } else {
      fetch("/api/events" + this.chaptersPath, {
        method: "POST",
        headers: window.ApplicationHeader(),
        body: JSON.stringify(this.event),
      })
        .then((response) => response.json())
        .then(() => {
          window.success("Event created successfully");
          this.listEvents();
        });
    }
  }

  showEvents() {
    this.eventsView.classList.remove("d-none");
    this.editForm.classList.add("d-none");
  }

  deleteEvent() {
    if (this.event.id) {
      fetch("/api/events/" + this.event.id, {
        method: "DELETE",
        headers: window.ApplicationHeader(),
      }).then(() => {
        window.success("Event deleted successfully");
        this.listEvents();
      });
    } else {
      this.listEvents();
    }
  }

  listEvents() {
    this.eventsView.innerHTML = "";

    fetch("/api/events" + this.chaptersPath, {
      method: "GET",
      headers: window.ApplicationHeader(),
    })
      .then((response) => response.json())
      .then((_events) => {
        console.log(_events);
        this.events = _events;

        this.events.forEach((event) => {
          const liElement = document.createElement("li");
          liElement.classList.add("list-group-item");
          liElement.classList.add("card");
          liElement.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${event.title}</h5>
              <h6 class="card-subtitle mb-2 text-primary">${
                event.createdBy
              }</h6>
              <p class="card-text">${event.description}</p>
              <small class="card-link"><i class="fa-regular fa-calendar"></i> ${new Date(
                event.eventDate
              ).toDateString()}</small>
              
            </div>
          `;
          this.eventsView.appendChild(liElement);

          if (JSON.parse(sessionStorage.auth).userName === event.createdBy) {
            liElement
              .querySelector(".card-title")
              .addEventListener("click", () => {
                this.openEvent(event);
              });
          } else {
            const registerEvent = () => {
              const ulEl = liElement.parentElement;
              ulEl.classList.add("d-none");

              const buyEvent = document.createElement("div");
              buyEvent.classList.add("card");

              buyEvent.innerHTML = `
            <div class="card h-100">
              <div class="card-header">
                <span class="h6">${event.title}</span>
                <a href="javascript://" class="btn btn-secondary float-end">Cancel</a>
              </div>
              <div class="card-body">
              <div class="d-flex justify-content-center d-none">
                <canvas id="qr" class="w-50"></canvas>
              </div>
                
                <p class="card-text lead">${event.description}</p>
              </div>
              <div class="card-footer">
                <a href="javascript://" class="btn btn-success float-end">&#8377; 10 | Register</a>
              </div>
            </div>`;
              ulEl.parentElement.appendChild(buyEvent);

              const regButton = buyEvent.querySelector(".btn-success");
              const qrEl = buyEvent.querySelector("#qr");
              const backToListing = () => {
                ulEl.parentElement.removeChild(buyEvent);
                ulEl.classList.remove("d-none");
                this.listEvents();
              };

              const regAction = () => {
                var qr = new QRious({
                  element: qrEl,
                  value: "https://github.com/neocotic/qrious",
                });
                qrEl.parentElement.classList.remove("d-none");
                regButton.addEventListener("click", () => {
                  fetch("/api/events/" + event.id, {
                    method: "POST",
                    headers: window.ApplicationHeader(),
                  }).then(() => {
                    window.success("Event registered successfully");
                    backToListing();
                  });
                });
              };

              fetch("/api/events/" + event.id, {
                method: "HEAD",
                headers: window.ApplicationHeader(),
              })
                .then((response) => {
                  if (response.ok) {
                    regButton.classList.remove("btn-success");
                    regButton.classList.remove("btn");
                    regButton.classList.add("text-primary");
                    regButton.innerHTML = "Attending";
                  } else {
                    regAction();
                  }
                })
                .catch(() => {
                  regAction();
                });

              buyEvent
                .querySelector(".btn-secondary")
                .addEventListener("click", () => {
                  backToListing();
                });
            };

            liElement
              .querySelector(".card-title")
              .addEventListener("click", registerEvent);
          }
        });
      });

    this.showEvents();
  }
}

export default Classes;