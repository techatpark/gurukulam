class CoreNotes {
  constructor(_parent, _annobase, _checkbox) {
    this.parent = _parent;

    this.annobase = _annobase;

    _checkbox.addEventListener("change", (event) => {
      this.annobase.readOnly = !event.currentTarget.checked;
    });

    // this is the sample for creating and loading anotaions;

    this.annobase.on("createAnnotation", (annotation) =>
      this.saveAnnotaion(annotation)
    );
    // recognito.setAnnotations(data);
    // eslint-disable-next-line no-undef
  }

  saveAnnotaion(annotation) {
    console.log(annotation);
    // {"text":" referred to as asexual reproducti","onSection":"/12th-botany/botany/reproduction/asexual_reproduction","note":"hello"}
    const note = {};

    note.value = annotation;

    fetch("/api/annotations" + this.path, {
      method: "POST",
      headers: window.ApplicationHeader(),
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((_note) => {
        console.log(_note.id);
      });
  }
  loadNotes() {
    fetch("/api/annotations" + this.path, {
      method: "GET",
      headers: window.ApplicationHeader(),
    })
      .then((response) => response.json())
      .then((notes) => {
        console.log(notes);
        this.annobase.setAnnotations(notes.map((t) => JSON.parse(t.value)));
      });
  }
}

export default CoreNotes;