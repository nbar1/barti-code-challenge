'use client';

import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { getCookie } from '@/helpers/getCookie';
import './EditProfile.css';
import { UserProfile } from '@/types/UserProfile';
import { useEffect, useState } from 'react';

const EditProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserProfile | null>(null);

  useEffect(() => {
    // get user profile from cookie
    const cookieData = getCookie('userProfile');
    if (cookieData) {
      setUserData(cookieData);
    }
  }, []);

  const cancelEditProfile = () => {
    // navigate back to profile page
    router.push('/profile');
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      city: '',
      state: '',
      favoriteCharacter: '',
      favoriteMovie: '',
      favoritePark: '',
      favoriteRide: '',
      ...userData,
    },
    validate: (values) => {
      const errors: { firstName?: string; lastName?: string } = {};

      // First Name Validation
      if (!values.firstName) {
        errors.firstName = 'First Name is required';
      }

      // Last Name Validation
      if (!values.lastName) {
        errors.lastName = 'Last Name is required';
      }

      return errors;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (values: any) => {
      // clean empty values
      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          delete values[key];
        }
      });

      // add last updated
      values.updatedAt = new Date().toISOString();

      // save to cookie
      document.cookie = `userProfile=${JSON.stringify(values)}`;
      router.push('/profile');
    },
  });

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="field half">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error">{formik.errors.firstName as string}</div>
          )}
        </div>

        <div className="field half">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error">{formik.errors.lastName as string}</div>
          )}
        </div>

        <div className="field">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
        </div>

        <div className="field half">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>

        <div className="field half">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          >
            <option value="">Select a State</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
        </div>

        <div className="field full">
          <label htmlFor="favoriteCharacter">Favorite Character</label>
          <input
            type="text"
            id="favoriteCharacter"
            name="favoriteCharacter"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.favoriteCharacter}
          />
        </div>

        <div className="field full">
          <label htmlFor="favoriteMovie">Favorite Movie</label>
          <input
            type="text"
            id="favoriteMovie"
            name="favoriteMovie"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.favoriteMovie}
          />
        </div>

        <div className="field full">
          <label htmlFor="favoritePark">Favorite Park</label>
          <input
            type="text"
            id="favoritePark"
            name="favoritePark"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.favoritePark}
          />
        </div>

        <div className="field full">
          <label htmlFor="favoriteRide">Favorite Ride</label>
          <input
            type="text"
            id="favoriteRide"
            name="favoriteRide"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.favoriteRide}
          />
        </div>

        <button type="submit" className="button">
          Update Profile
        </button>
        {userData?.updatedAt && (
          <button type="button" className="button secondary" onClick={cancelEditProfile}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
