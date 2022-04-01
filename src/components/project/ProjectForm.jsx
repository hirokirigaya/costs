import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input type="text" text="Project Name" placeholder="Enter project name here" name="name"/>
      <Input type="number" text="Project Budget" placeholder="Enter the budget here" name="budget"/>
      <Select name="categoryId" text="Select one Category"/>
      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
