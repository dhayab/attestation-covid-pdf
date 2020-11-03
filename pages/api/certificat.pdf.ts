import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { NextApiRequest, NextApiResponse } from 'next';
import absoluteUrl from 'next-absolute-url';

import { generatePdf } from '../../utils/pdf-util';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const now = new Date();
  const profile = {
    ...{
      firstname: '',
      lastname: '',
      birthday: '',
      placeofbirth: '',
      address: '',
      city: '',
      zipcode: '',
      reasons: 'travail',
      datesortie: format(now, 'dd/MM/yyyy', { locale: fr }),
      heuresortie: format(now, 'HH:ii', { locale: fr }),
    },
    ...req.query,
  };

  const { origin } = absoluteUrl(req);
  const { buffer } = await generatePdf(profile, profile.reasons, `${origin}/certificate.pdf`);
  const pdf = Buffer.from(buffer);

  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdf);
}