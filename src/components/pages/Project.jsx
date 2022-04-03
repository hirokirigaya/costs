import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

import Message from '../layout/Message';

import ProjectForm from "../project/ProjectForm";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function editPost(project) {
    if (project.budget < project.cost) {
      setMessage('The budget cannot be less than the cost of the project')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
          setProject(data)
          setShowProjectForm(false)
          setMessage('The project has changed with success')
          setType('success')
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.projectDetails}>
          <Container customClass="column">
              {message && <Message type={type} msg={message}/>}
            <div className={styles.detailsContainer}>
              <h1>Project: {project.name}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm ? "Edit Project" : "Close"}
              </button>
              {!showProjectForm ? (
                <div className={styles.projectInfo}>
                  <p>
                    <span>Category:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Budget:</span> ${project.budget}
                  </p>
                  <p>
                    <span>Total used:</span> ${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projectInfo}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Save changes"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
