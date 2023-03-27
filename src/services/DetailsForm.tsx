import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  CardHeader,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, FormikHelpers } from "formik";
import React from "react";
import { Schema, array, boolean, object, string } from "yup";
import { CreateRiskStudentsDetailDto } from "../api/services/base/models";
import { TextFormField } from "../shared/FormFields/TextFormField";
import MultiSelect from "../shared/FormFields/MultiSelect";
import { CheckBoxFormField } from "../shared/FormFields/CheckBoxFormField";
import { useRiskStudentsDetailsControllerCreate } from "../api/services/base/risk-students-details";
import { useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { SelectFormField } from "../shared/FormFields/SelectFormField";

type FormValues = CreateRiskStudentsDetailDto;
export const schema: Schema<FormValues> = object({
  facultyName: string().required("faculty name is required"),
  facultyEmail: string().required("facultyEmail is required"),
  courseNumber: string().required("courseNumber is required"),
  courseCrn: string().required("courseCrn is required"),
  studentName: string().required("studentName is required"),
  studentId: string(),
  studentNetId: string(),
  notes: string(),
  sendEmail: boolean(),
  graduateProgram: string(),
  isGraduateStudent: boolean().required("field is required"),
  factors: array().required().of(string().required("field is required")),
});

export default function DetailsFormPage() {
  const getInitialValues = (student: FormValues | null): FormValues => {
    return {
      facultyName: student?.facultyName ?? "",
      facultyEmail: student?.facultyEmail ?? "",
      courseNumber: student?.courseNumber ?? "",
      courseCrn: student?.courseCrn ?? "",
      studentName: student?.studentName ?? "",
      studentId: student?.studentId ?? "",
      studentNetId: student?.studentNetId ?? "",
      sendEmail: student?.sendEmail ?? false,
      factors: student?.factors ?? [],
      notes: student?.notes ?? "",
      graduateProgram: student?.graduateProgram ?? "",
      isGraduateStudent: student?.isGraduateStudent ?? false,
    };
  };
  const optionFields = [
    "Attendance",
    "Low quiz grades (graded attempts)",
    "Low or missing test grades",
    "Low homework grades (of submitted assignments)",
    "Late or missing quizzes/homeworks",
    "Student currently has a failing final course grade",
    "Student unresponsive to communication attempts",
  ];
  const graduateFields = [
    "MS Applied Stats & Analytics",
    "MS Computer Science",
    "MS Information Technology",
    "MS Software Engineering",
    "Doctorate",
    "Certificate only",
    "Not sure",
  ];
  const navigate = useNavigate();
  const postDetails = useRiskStudentsDetailsControllerCreate();
  const queryClient = new QueryClient();
  const [initialValues] = React.useState<FormValues>(getInitialValues(null));
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    postDetails.mutateAsync({
      data: {
        facultyName: values.facultyName,
        facultyEmail: values.facultyEmail,
        courseNumber: values.courseNumber,
        courseCrn: values.courseCrn,
        studentName: values.studentName,
        studentId: values.studentId,
        studentNetId: values.studentNetId,
        notes: values.notes,
        isGraduateStudent: values.isGraduateStudent,
        sendEmail: values.sendEmail,
        factors: values.factors,
        graduateProgram: values.graduateProgram,
      },
    });
    queryClient.invalidateQueries(["risk-students-details"]);
    navigate(-1);
    actions.setSubmitting(true);
  };
  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <Card>
        <CardHeader title="CCSE Student Early Warning System"></CardHeader>
        <CardContent>
          <Box sx={{ marginBottom: 2 }}>
            <Typography>
              Dear colleagues, Please use this form to report at-risk students
              in their classes. Alerts are sent to the CCSE Advising Support
              Center (ccseadvising@kennesaw.edu or amcclur6@kennesaw.edu).
              Alerts can be submitted at any point in the semester. An academic
              advisor may reach out to you for more information prior to
              attempting to contact the student, and will follow up with you
              after talking with the student. Thank you for your dedication in
              student success!
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnChange
            validateOnMount
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Field
                        name="facultyName"
                        type="text"
                        component={TextFormField}
                        label="Faculty Name "
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="facultyEmail"
                        type="email"
                        component={TextFormField}
                        label="Faculty Email (e.g. jdoe@kennesaw.edu)"
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="courseNumber"
                        type="text"
                        component={TextFormField}
                        label="Course Number (e.g. CSE 1321)"
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="courseCrn"
                        type="text"
                        component={TextFormField}
                        label="Course CRN"
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="studentName"
                        type="text"
                        component={TextFormField}
                        label="Student Name "
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="studentId"
                        type="text"
                        component={TextFormField}
                        label="Student ID (if known - e.g. 001234567)"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="studentNetId"
                        type="text"
                        component={TextFormField}
                        label="Student NetID/email (if known - e.g. jdoe1)"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="factors"
                        options={optionFields.map((x) => {
                          return { label: x, value: x };
                        })}
                        component={MultiSelect}
                        label="What factors are you concerned about?"
                        //required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="notes"
                        type="text"
                        component={TextFormField}
                        label="Is there anything else you would like the CCSE Academic Advisors to know prior to attempting to reach out to the student?"
                        required={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="isGraduateStudent"
                        component={CheckBoxFormField}
                        label="Is this a graduate student?"
                      />
                    </Grid>
                    {formik.values.isGraduateStudent && (
                      <Grid item xs={12} sx={{ m: 2 }}>
                        <Field
                          name="graduateProgram"
                          options={graduateFields.map((x) => {
                            return { label: x, value: x };
                          })}
                          component={SelectFormField}
                          label="Which graduate program is this student in?"
                        />
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Field
                        name="sendEmail"
                        component={CheckBoxFormField}
                        label="Send me email receipt of my responses?"
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent={"center"}>
                    <Button
                      color="success"
                      sx={{ width: "15%" }}
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
}
