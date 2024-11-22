import { StyleSheet, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.exploreText}>Let's Explore!</ThemedText>
      </ThemedView>

      {/* Fun Text for Exploration */}
      <ThemedText style={styles.exploreSubText}>
        Ready to embark on a cosmic journey? 🚀 Start your adventure by exploring new ideas, discover hidden gems, and take your skills to the next level!
      </ThemedText>

      {/* Fun Collapsible Sections */}
      <Collapsible title="File-based routing">
        <ThemedText>
          Dive into the heart of the app with file-based routing! Learn how to switch between different screens with just a few lines of code. It's simple and powerful! 
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          The app is ready to go across Android, iOS, and Web platforms. You're never far from your app, no matter what device you're on! 🌐
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          Whether it's static or dynamic images, you're covered! 🎨 Learn how to scale images for different screen densities and display them flawlessly.
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom fonts">
        <ThemedText>
          Want a unique look for your app? 🌟 Load custom fonts and give your app a special touch. Just like this awesome font right here!  
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <ThemedText>
          Embrace the dark side or keep it light! 🌗 Switch between themes effortlessly with the power of <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText>
          Let's add some fun with animations! 🎉 The app includes a hand-waving animation, powered by <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Want to add parallax effects? The <ThemedText type="defaultSemiBold">ParallaxScrollView</ThemedText> will add depth to your images!
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  exploreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  exploreSubText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
});
