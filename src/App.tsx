import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AllServicesPage from "./pages/AllServicesPage.tsx";
import ServiceCategoryPage from "./pages/ServiceCategoryPage.tsx";
import ProviderDetailPage from "./pages/ProviderDetailPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import MyBookingsPage from "./pages/MyBookingsPage.tsx";
import InboxPage from "./pages/InboxPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import FillProfilePage from "./pages/FillProfilePage.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import VerifyCodePage from "./pages/VerifyCodePage.tsx";
import CreatePasswordPage from "./pages/CreatePasswordPage.tsx";
import EditProfilePage from "./pages/EditProfilePage.tsx";
import NotificationSettingsPage from "./pages/NotificationSettingsPage.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import AddCardPage from "./pages/AddCardPage.tsx";
import SecurityPage from "./pages/SecurityPage.tsx";
import LanguagePage from "./pages/LanguagePage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import HelpCenterPage from "./pages/HelpCenterPage.tsx";
import InviteFriendsPage from "./pages/InviteFriendsPage.tsx";
import NotificationsPage from "./pages/NotificationsPage.tsx";
import BookmarkPage from "./pages/BookmarkPage.tsx";
import SpecialOffersPage from "./pages/SpecialOffersPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import ChatDetailPage from "./pages/ChatDetailPage.tsx";
import EReceiptPage from "./pages/EReceiptPage.tsx";
import AddPromoPage from "./pages/AddPromoPage.tsx";
import PaymentMethodsPage from "./pages/PaymentMethodsPage.tsx";
import ReviewSummaryPage from "./pages/ReviewSummaryPage.tsx";
import CreatePinPage from "./pages/CreatePinPage.tsx";
import SetFingerprintPage from "./pages/SetFingerprintPage.tsx";
import CongratulationsPage from "./pages/CongratulationsPage.tsx";
import MostPopularPage from "./pages/MostPopularPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import SearchResultsPage from "./pages/SearchResultsPage.tsx";
import FilterPage from "./pages/FilterPage.tsx";
import BookingDetailsPage from "./pages/BookingDetailsPage.tsx";
import AddressLocationPage from "./pages/AddressLocationPage.tsx";
import EnterPinPage from "./pages/EnterPinPage.tsx";
import BookingSuccessPage from "./pages/BookingSuccessPage.tsx";
import CancelBookingPage from "./pages/CancelBookingPage.tsx";
import CancelBookingSuccessPage from "./pages/CancelBookingSuccessPage.tsx";
import CleaningBookingPage from "./pages/CleaningBookingPage.tsx";
import PaintingBookingPage from "./pages/PaintingBookingPage.tsx";
import LaundryBookingPage from "./pages/LaundryBookingPage.tsx";
import ApplianceBookingPage from "./pages/ApplianceBookingPage.tsx";
import PlumbingBookingPage from "./pages/PlumbingBookingPage.tsx";
import ShiftingBookingPage from "./pages/ShiftingBookingPage.tsx";
import ShiftingAddressPage from "./pages/ShiftingAddressPage.tsx";
import CarRepairingBookingPage from "./pages/CarRepairingBookingPage.tsx";
import VoiceCallPage from "./pages/VoiceCallPage.tsx";
import CustomerServicePage from "./pages/CustomerServicePage.tsx";
import SplashPage from "./pages/SplashPage.tsx";
import LetsYouInPage from "./pages/LetsYouInPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/splash" element={<SplashPage />} />
          <Route path="/onboarding" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/lets-you-in" element={<LetsYouInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/fill-profile" element={<FillProfilePage />} />
          <Route path="/create-pin" element={<CreatePinPage />} />
          <Route path="/set-fingerprint" element={<SetFingerprintPage />} />
          <Route path="/congratulations" element={<CongratulationsPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-code" element={<VerifyCodePage />} />
          <Route path="/create-password" element={<CreatePasswordPage />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
          <Route path="/most-popular" element={<MostPopularPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/provider/:providerId" element={<ProviderDetailPage />} />
          <Route path="/booking/:providerId" element={<BookingPage />} />
          <Route path="/cleaning-booking" element={<CleaningBookingPage />} />
          <Route path="/painting-booking" element={<PaintingBookingPage />} />
          <Route path="/laundry-booking" element={<LaundryBookingPage />} />
          <Route path="/appliance-booking" element={<ApplianceBookingPage />} />
          <Route path="/plumbing-booking" element={<PlumbingBookingPage />} />
          <Route path="/shifting-booking" element={<ShiftingBookingPage />} />
          <Route path="/shifting-address" element={<ShiftingAddressPage />} />
          <Route path="/car-repairing-booking" element={<CarRepairingBookingPage />} />
          <Route path="/booking-details" element={<BookingDetailsPage />} />
          <Route path="/address-location" element={<AddressLocationPage />} />
          <Route path="/enter-pin" element={<EnterPinPage />} />
          <Route path="/booking-success" element={<BookingSuccessPage />} />
          <Route path="/cancel-booking" element={<CancelBookingPage />} />
          <Route path="/cancel-booking-success" element={<CancelBookingSuccessPage />} />
          <Route path="/bookings" element={<MyBookingsPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/chat/:chatId" element={<ChatDetailPage />} />
          <Route path="/voice-call" element={<VoiceCallPage />} />
          <Route path="/customer-service" element={<CustomerServicePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/notification-settings" element={<NotificationSettingsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/add-card" element={<AddCardPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/invite-friends" element={<InviteFriendsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/e-receipt" element={<EReceiptPage />} />
          <Route path="/add-promo" element={<AddPromoPage />} />
          <Route path="/payment-methods" element={<PaymentMethodsPage />} />
          <Route path="/review-summary" element={<ReviewSummaryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
