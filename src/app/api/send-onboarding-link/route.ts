import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email, name } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Vitality Global <onboarding@vitality-global.com>',
            to: email,
            subject: '🚀 Tu link de Onboarding — Vitality Global',
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0D1B2A;font-family:'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0D1B2A;padding:40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#151F30;border-radius:16px;border:1px solid #2A3A55;overflow:hidden;">

                    <!-- Header gradient bar -->
                    <tr>
                        <td style="height:4px;background:linear-gradient(135deg,#6C63FF 0%,#FF3CAC 100%);"></td>
                    </tr>

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding:40px 40px 20px;">
                            <img src="https://vitality-global.com/images/logo.png" alt="Vitality Global" width="200" style="max-width:200px;height:auto;">
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding:20px 40px;">
                            <h1 style="color:#F0F4FF;font-size:24px;margin:0 0 10px;text-align:center;">
                                ¡Pago confirmado! 🎉
                            </h1>
                            <p style="color:#8899BB;font-size:16px;line-height:1.6;text-align:center;margin:0 0 10px;">
                                Hola${name ? ` ${name}` : ''},
                            </p>
                            <p style="color:#8899BB;font-size:16px;line-height:1.6;text-align:center;margin:0 0 30px;">
                                Gracias por confiar en <strong style="color:#F0F4FF;">Vitality Global</strong>.
                                Tu pago fue procesado exitosamente.
                            </p>
                        </td>
                    </tr>

                    <!-- Info box -->
                    <tr>
                        <td style="padding:0 40px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1C2940;border-radius:12px;border:1px solid #2A3A55;">
                                <tr>
                                    <td style="padding:20px;">
                                        <p style="color:#00D4FF;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;font-weight:bold;">
                                            PRÓXIMO PASO
                                        </p>
                                        <p style="color:#F0F4FF;font-size:15px;line-height:1.6;margin:0;">
                                            Completá el formulario de activación para que nuestro equipo comience a trabajar en tu landing page.
                                            <strong style="color:#00D4FF;">Tiempo estimado: 10–15 minutos.</strong>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td align="center" style="padding:0 40px 20px;">
                            <a href="https://vitality-global.com/onboarding"
                               style="display:inline-block;background:linear-gradient(135deg,#6C63FF 0%,#FF3CAC 100%);color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;padding:16px 40px;border-radius:12px;letter-spacing:1px;text-transform:uppercase;">
                                COMPLETAR ONBOARDING →
                            </a>
                        </td>
                    </tr>

                    <!-- Alternative link -->
                    <tr>
                        <td align="center" style="padding:0 40px 30px;">
                            <p style="color:#8899BB;font-size:12px;margin:0;">
                                Si el botón no funciona, copiá este link:<br>
                                <a href="https://vitality-global.com/onboarding" style="color:#00D4FF;text-decoration:underline;word-break:break-all;">
                                    https://vitality-global.com/onboarding
                                </a>
                            </p>
                        </td>
                    </tr>

                    <!-- Timeline -->
                    <tr>
                        <td style="padding:0 40px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="33%" align="center" style="padding:10px;">
                                        <div style="background-color:#6C63FF;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;color:white;font-weight:bold;margin:0 auto 8px;">✓</div>
                                        <p style="color:#00D4FF;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:bold;">PASO 1</p>
                                        <p style="color:#8899BB;font-size:12px;margin:0;">Pago realizado</p>
                                    </td>
                                    <td width="33%" align="center" style="padding:10px;">
                                        <div style="background:linear-gradient(135deg,#6C63FF,#FF3CAC);width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;color:white;font-weight:bold;margin:0 auto 8px;">2</div>
                                        <p style="color:#00D4FF;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:bold;">PASO 2</p>
                                        <p style="color:#8899BB;font-size:12px;margin:0;">Onboarding</p>
                                    </td>
                                    <td width="33%" align="center" style="padding:10px;">
                                        <div style="background-color:#2A3A55;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;color:#8899BB;font-weight:bold;margin:0 auto 8px;">3</div>
                                        <p style="color:#8899BB;font-size:11px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:bold;">PASO 3</p>
                                        <p style="color:#8899BB;font-size:12px;margin:0;">Entrega 48hs</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Important note -->
                    <tr>
                        <td style="padding:0 40px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1C2940;border-radius:12px;border-left:3px solid #FF3CAC;">
                                <tr>
                                    <td style="padding:16px 20px;">
                                        <p style="color:#FF3CAC;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:bold;">⚡ IMPORTANTE</p>
                                        <p style="color:#8899BB;font-size:13px;line-height:1.5;margin:0;">
                                            Las 48 horas de entrega comienzan a contar desde que completás el onboarding.
                                            Podés hacerlo cuando quieras — este link no expira.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding:20px 40px;border-top:1px solid #2A3A55;">
                            <p style="color:#556688;font-size:11px;text-align:center;margin:0;">
                                © ${new Date().getFullYear()} Vitality Global — Todos los derechos reservados
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Error al enviar el email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
