/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Point;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.ArrayList;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 *
 * @author Admin
 */
public class Game extends JFrame{

    /**
     * @param args the command line arguments
     */
    public Game(int soclick, int sodeimgiongnhau, String img) {
        ArrayList<Point> points = new ArrayList<>();
        int soclickconlai = soclick;
        int sodiemgnconlai = sodeimgiongnhau;
        String mess = "";
        

        final JLabel jLabel1 = new JLabel() {

            @Override
            public void setPreferredSize(Dimension preferredSize) {
                super.setPreferredSize(new Dimension(100, 15));
            }

            @Override
            public void setLocation(int x, int y) {
                super.setLocation(10, 10); //To change body of generated methods, choose Tools | Templates.
            }

        };

        final JLabel jLabel2 = new JLabel() {

            @Override
            public void setPreferredSize(Dimension preferredSize) {
                super.setPreferredSize(new Dimension(100, 15));
            }

            @Override
            public void setLocation(int x, int y) {
                super.setLocation(510, 10); //To change body of generated methods, choose Tools | Templates.
            }

        };

        JLabel jLabel3 = new JLabel() {

            @Override
            public void setForeground(Color fg) {
                super.setForeground(Color.RED); //To change body of generated methods, choose Tools | Templates.
            }

            @Override
            public void setPreferredSize(Dimension preferredSize) {
                super.setPreferredSize(new Dimension(70, 15));
            }

            @Override
            public void setLocation(int x, int y) {
                super.setLocation(465, 1); //To change body of generated methods, choose Tools | Templates.
            }

        };

        JPanel paintPanel = new JPanel() {

            @Override
            public void setLocation(int x, int y) {
                super.setLocation(50, 50); //To change body of generated methods, choose Tools | Templates.
            }
            ImageIcon i1 = new ImageIcon(getClass().getClassLoader().getResource(img));
            Image image = i1.getImage();

            @Override
            protected void paintComponent(Graphics g) {
                Graphics2D g2d = (Graphics2D) g;
                g2d.drawImage(image, 0, 0, this.getWidth(), this.getHeight(), this);

                g2d.setColor(Color.GREEN);
                for (Point p : points) {
                    g2d.drawOval(p.x - 15, p.y - 15, 30, 30);
                    g2d.drawOval(p.x - 15 - (this.getWidth() / 2), p.y - 15, 30, 30);

                }
                if (points.size() >= 3) {
                    jLabel3.setText("you win");

                }
            }

        };

        paintPanel.setPreferredSize(new Dimension(900, 500));
        paintPanel.addMouseListener(new MouseAdapter() {

            @Override
            public void mouseClicked(MouseEvent e) {

                Point p = new Point();
                p.x = e.getX();
                p.y = e.getY();
                System.out.println(e.getPoint());
                if ((p.x >= 485 && p.x <= 515 && p.y >= 70 && p.y <= 120)) {
                    p.x = 500;
                    p.y = 95;
                    points.add(p);
                } else if ((p.x >= 812 && p.x <= 842 && p.y >= 89 && p.y <= 139)) {
                    p.x = 827;
                    p.y = 114;
                    points.add(p);
                } else if ((p.x >= 595 && p.x <= 624 && p.y >= 414 && p.y <= 463)) {
                    p.x = 609;
                    p.y = 438;
                    points.add(p);
                }

                paintPanel.repaint();
                //soclickconlai--;

            }
        });

        JButton jButton1 = new JButton() {
            @Override
            public void setText(String text) {
                super.setText("new game"); //To change body of generated methods, choose Tools | Templates.
            }

            @Override
            public void setPreferredSize(Dimension preferredSize) {
                super.setPreferredSize(new Dimension(20, 20));
            }

            @Override
            public void setLocation(int x, int y) {
                super.setLocation(0, 0); //To change body of generated methods, choose Tools | Templates.
            }
        };
       

        this.add(jButton1);
        this.setLayout(new FlowLayout());
        this.setPreferredSize(new Dimension(1000, 600));
        this.setResizable(false);
        this.add(paintPanel);
        //this.add(jLabel1);
        //this.add(jLabel2);
        this.add(jLabel3);
        //this.add(new JButton("Dummy"));
        System.out.println(points.size());
        this.pack();
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);

    }
    public static void main(String[] args) {
        int soclick = 10;
        int sodgn = 3;
        String img = "image/game1.png";
     
        new Game(soclick, sodgn, img);
    }
    
}
