
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SignupForm from "../components/SignupForm";
import Vision from "../components/Vision";
import Testimonials from "../components/Testimonials";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Vision />
      <Testimonials />
      <SignupForm />
    </MainLayout>
  );
};

export default Index;
