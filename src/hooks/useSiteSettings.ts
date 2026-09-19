import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

export interface SiteSettings {
  whatsapp_number: string;
  email_address: string;
  office_address: string;
  hero_image: string;
  about_image: string;
}

const DEFAULT_SETTINGS: SiteSettings = {
  whatsapp_number: '+92 321-6900448',
  email_address: 'jeekhurram@yahoo.com',
  office_address: 'Shop No.26, 3rd Floor, Shaid Plaza, Peshawar',
  hero_image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  about_image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('*')
          .eq('id', 1)
          .single();

        if (data && !error) {
          setSettings(data);
        }
      } catch (err) {
        console.log('Using default fallback settings', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading };
};