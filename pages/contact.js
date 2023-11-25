import { Suspense, useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models/fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation('walk');
  };
  const handleBlur = () => {
    setCurrentAnimation('idle');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ed',
          from_email: form.email,
          to_email: 'ed.reed@me.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(response => {
        setIsLoading(false);
        console.log('SUCCESS!', response.status, response.text);
        showAlert({
          show: true,
          text: 'Message sent successfully!',
          type: 'success',
        });
        // TODO: Show success Message
        // TODO: Hide an alert

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch(error => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.log('Failed', error);
        showAlert({
          show: true,
          text: "I didn't receive your message!",
          type: 'danger',
        });
        // TODO: Show Error Message
      });
  };

  return (
    <Layout title="Contact">
      <section className="relative flex lg:flex-row flex-col max-container">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 flex flex-col min-w-[50%]">
          <h1 className="head-text">Get In Touch</h1>
          <form
            action=""
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold -mb-8">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              className="input"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label className="text-black-500 font-semibold -mb-8">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@email.com"
              required
              value={form.email}
              onChange={handleChange}
              className="input"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label className="text-black-500 font-semibold -mb-8">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Let me know how I can help you."
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="input"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              className="btn"
              type="submit"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h=[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <Suspense fallback={<Loader />}>
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.625, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
              />
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </Layout>
  );
};
export default ContactPage;
