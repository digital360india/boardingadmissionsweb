"use client";
import React from "react";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const TestPDF = ({ result, totalScore }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Test Results</Text>
        {result.map((question, index) => (
          <View key={index} style={styles.questionBlock}>
            <Text>Q{index + 1}: {question.questionText}</Text>
            <Text>Selected Answer: {question.selectedAnswer}</Text>
            <Text>Correct Answer: {question.correctAnswer}</Text>
            <Text>Marks: {question.marks}</Text>
            <Text>--------------------------------</Text>
          </View>
        ))}
        <Text>Total Score: {totalScore}</Text>
      </View>
    </Page>
  </Document>
);
export  default TestPDF;

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  questionBlock: { marginBottom: 15 },
});