import Beranda from '../views/pages/beranda';
import KelolaSampah from '../views/pages/kelolaSampah';
import Layanan from '../views/pages/layanan';
import TentangKami from '../views/pages/tentangKami';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/kelola-sampah': KelolaSampah,
  '/layanan': Layanan,
  '/tentang-kami': TentangKami,
};

export default routes;
