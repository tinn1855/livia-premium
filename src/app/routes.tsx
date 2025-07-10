import { Home } from '@/components/pages/home';
import { Route, Routes } from 'react-router-dom';

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
}
